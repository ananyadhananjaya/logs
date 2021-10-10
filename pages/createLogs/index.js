import createLog from "../../firebase/createLog";

export default function CreateLogs(){
    return(
        <>
        <button onClick = {()=> createLog()}>add log</button>
            </>
    )
}