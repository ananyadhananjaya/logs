import { useState } from "react";
import createLog from "../api/createLog";
import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";

export default function CreateLogs() {
  const [data, setData] = useState("");
  const router = useRouter();

  const handleChange = (val) => {
    setData(val);
  };

  const handleClick = () => {
    if (data.length > 0) {
      createLog(data).then(() => {
        router.push("/logs");
      });
    } else {
      alert("Please enter a title with a log");
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <input
          name="logText"
          id="logText"
          className="w-2/3 m-2 p-2 bg-gray-100 block border border-gray-400 focus:outline-none focus:border-gray-500 rounded focus:bg-white"
          placeholder="log here"
          onChange={(event) => handleChange(event.target.value)}
          autoComplete="off"
        ></input>{" "}
      </div>
      <div className="flex justify-center">
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

CreateLogs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
