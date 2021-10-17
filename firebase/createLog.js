import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore"; 

export default async function createLog(title, log){
    await setDoc(doc(db, "logs", title), {
        log: log
    })
    .then((data)=>{})
    .catch((error) => console.log(error))
}