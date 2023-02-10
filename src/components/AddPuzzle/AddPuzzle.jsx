import Puzzle from '../Puzzle/Puzzle'
import React, { useState } from 'react'
import axios from 'axios';
import './AddPuzzle.css';
import { Button, Form } from 'react-bootstrap';
import myFirebase from '../../firebase/firebase';


export default function AddPuzzle({userId}) {
    const dim = 35;
    var root = document.querySelector(':root');
    root.style.setProperty('--dim', `${dim}px`);

    const [upstreamName, setUpstreamName] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [structure, setStructure] = useState(null);

    const processImage = (url) => {
        axios.post('https://us-central1-boxtout-d20da.cloudfunctions.net/scanPuzzle',
            JSON.stringify({
                image: url,
            }),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.data)
        .then((data) => {
            setStructure(data);
        }).catch((err) => {
            if (err.response && err.response.status === 900) {
                alert('Bad Input')
            }
        })
    };

    const uploadImage = () => {
        myFirebase.upLoadFile(userId, document.querySelector('#fileInput').files[0])
        .then(([name, storageRef])=>{
            setUpstreamName(name)
            return myFirebase.getUrl(storageRef);
        })
        .then((url)=>{
            console.log(url);
            setImageUrl(url);
            processImage(url);
        });
    };

    const registerPuzzle = () => {
        myFirebase.registerPuzzle(userId, upstreamName, structure)
    }

    return (
        <div id="AddPuzzle">
            <div className='inputBox'>
                <Form.Control id="fileInput" type="file" placeholder="URL" className='w-100' />
            </div>
            <Button variant="primary" onClick={uploadImage}>
                Load
            </Button>
            {
                imageUrl !== null
                    ? (
                        <React.Fragment>
                            <Button variant={editMode ? "info" : "warning"} onClick={() => setEditMode(!editMode)}>
                                {editMode ? 'Save' : 'Edit'}
                            </Button>
                            <div className='mainPane'>
                                <div className="col">
                                    <img
                                        style={{
                                            height: 12 * dim + 11,
                                            width: 12 * dim + 11,
                                            border: '1px solid black',
                                        }}
                                        src={imageUrl}
                                        alt='Puzzle' />
                                </div>
                                <div className="col">
                                    {
                                        structure !== null
                                        ? (
                                            <Puzzle
                                                editMode={editMode}
                                                structure={structure}
                                                setStructure={setStructure}
                                            />
                                        )
                                        : null
                                    }
                                </div>
                            </div>
                            {
                                upstreamName !== null && structure !== null
                                ? (
                                    <Button variant="success" onClick={registerPuzzle}>
                                        Done
                                    </Button>
                                )
                                : null
                            }
                        </React.Fragment>
                    )
                    : null
            }
        </div>
    )
}


