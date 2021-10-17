import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import getLog from "../../firebase/getLog";
import { db } from "../../firebase/firebase";
import { data } from "autoprefixer";

export default function Logs({logs}){
    logs.forEach((doc)=>{
        console.log(doc)
    })
    return(
        <>
         <p>
             {logs.map((data)=>(
                 <p>{data.log}</p>
             ))}
         </p>
         </>
    )
}

export async function getStaticProps(){
    const res = await getDocs(collection(db, "logs"));
    let ans = []
    await res.forEach(doc => ans.push(doc.data()))
    return {
        props :{
            logs: ans
        }
    }

}