import createLog from "../../firebase/createLog";

export default function CreateLogs(){
    return(
        <>
        <div className="container sm">hello world</div>
        <button onClick = {()=> createLog()}>add log</button>
            </>
    )
}