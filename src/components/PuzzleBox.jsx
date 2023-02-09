import Puzzle from './Puzzle'
import { useState } from 'react'
import axios from 'axios';


export default function PuzzleBox() {
    const [editMode, setEditMode] = useState(false);
    const [structure, setStructure] = useState({
        rowCount: 12,
        colCount: 12,
        blocked: [
            3, 9, 13, 17, 19, 23, 26, 28, 32, 34, 36, 39, 42, 45, 50, 53, 56, 59, 63,
            67, 69, 73, 76, 78, 82, 87, 89, 93, 95, 96, 98, 102, 104, 109, 111, 115,
            117, 119, 124, 126, 130, 133, 135, 140
        ],
        marked: [
            0, 2, 4, 6, 8, 10, 14, 15, 18, 20, 21, 24, 25, 27, 29, 31, 33, 35, 37, 40,
            43, 46, 48, 51, 54, 57, 60, 62, 64, 65, 68, 70, 71, 74, 77, 79, 83, 84,
            85, 88, 90, 94, 97, 99, 101, 103, 105, 108, 110, 112, 116, 118, 120, 125,
            127, 129, 131, 134, 136, 141
        ]
    });


    const loadImage = () => {

        axios.post('https://us-central1-boxtout-d20da.cloudfunctions.net/scanPuzzle',
            JSON.stringify({
                image: document.getElementById('urlInput').value,
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

    return (
        <div>
            <input type="text" id="urlInput" />
            <button onClick={loadImage}>
                Load
            </button>
            <button onClick={() => setEditMode(!editMode)}>
                {editMode ? 'Save' : 'Edit'}
            </button>
            <Puzzle
                editMode={editMode}
                structure={structure}
                setStructure={setStructure}
            />
        </div>
    )
}


