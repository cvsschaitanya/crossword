import './firebaseInit';
import { getStorage, ref as getStorageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as getDbRef, set } from "firebase/database";

const storageService = getStorage();

const upLoadFile = (userId, file, callback = () => { }) => {
    return new Promise((resolve, reject) => {
        const now = Date.now();
        let ext;
        if (file && file.type && file.type.includes('/')) {
            const spl = file.type.split('/');
            ext = spl[spl.length - 1];
        }
        else
            ext = 'png';
        
        const storageRef = getStorageRef(storageService, `user/${userId}/images/${now}.${ext}`);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            resolve([now, storageRef]);
        }).catch((err)=>{
            reject(err);
        });
    });
};

const getUrl = (storageRef)=> getDownloadURL(storageRef);


const registerPuzzle = (userId, name, structure) => {
    const db = getDatabase();
    set(
        getDbRef(db, `users/${userId}/puzzles/${name}/`), 
        structure
    );
}

export default {
    upLoadFile,
    getUrl,
    registerPuzzle,
};