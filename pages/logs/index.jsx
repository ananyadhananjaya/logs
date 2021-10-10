import getLog from "../../firebase/getLog";

export default function Logs(){
    return(
        <>
         <button onClick = {()=> getLog()}>get data</button> 
         </>
    )
}