import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore"; 

export default async function createLog(log){
    await addDoc(collection(db, "logs"), {
        log: log
    })
    .then((data)=>{})
    .catch((error) => console.log(error))
}