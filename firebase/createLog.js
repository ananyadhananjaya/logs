import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore"; 

let d = new Date();
const date = d.getDate()+ d.getMonth() + d.getFullYear();

export default async function createLog(){
    await setDoc(doc(db, "logs", "The sun"), {
        date: date,
        log: "This day the sun was shining and the mooon was smiling."
    })
}