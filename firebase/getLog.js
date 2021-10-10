import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default async function getLog(){
    const docRef = doc(db, "logs", "The sun");
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        console.log("data", docSnap.data());
    } else{
        console.log("no data")
    }
}