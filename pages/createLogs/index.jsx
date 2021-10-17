import { useState } from "react";
import createLog from "../../firebase/createLog";
import { useRouter } from "next/dist/client/router";

export default function CreateLogs() {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleChange = (val) => {
    setData(val);
  };

  const handleTitle = (val) => {
    setTitle(val);
  };
  const handleClick = () => {
    if(title.length > 0 && data.length > 0){
       createLog(title, data)
       .then(()=>{
           router.push("/")
       })
    }
    else{
        alert("Please enter a title with a log")
    }
  };
  return (
    <>
      <div className="bg-landing-page">
        <input
          type="text"
          className="block m-2 apppearance-none bg-gray-100 w-1/2 h-10 p-2 border border-gray-400 focus:outline-none focus:border-gray-500 rounded"
          placeholder="Title for today?"
          onChange={(event)=> handleTitle(event.target.value)}
        />
        <textarea
          name="logText"
          id="logText"
          cols="100"
          rows="10"
          className="m-2 p-2 bg-gray-100 block border border-gray-400 focus:outline-none focus:border-gray-500 rounded"
          placeholder="log here"
          onChange={(event) => handleChange(event.target.value)}
        ></textarea>{" "}
        <button
          className="bg-yellow-500 hover:bg-yellow-600 m-2 px-10 py-2 font-mono text-lg text-white rounded-md"
          onClick={handleClick}
        >
          create log
        </button>
      </div>
    </>
  );
}
