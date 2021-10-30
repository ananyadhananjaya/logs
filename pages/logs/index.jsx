import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import getLog from "../../firebase/getLog";
import { db } from "../../firebase/firebase";
import { data } from "autoprefixer";
import { stringify } from "@firebase/util";

export default function Logs({ data }) {
  Object.values(data).forEach((doc) => console.log(doc.log));
  return (
    <>
      <div class="">
      <div class="flex flex-wrap justify-center">
      {Object.values(data).map((doc) => (
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-2 w-2/3">
          <div class="px-6 py-4">
            <p>{doc.log}</p>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await getDocs(collection(db, "logs"));
  const data = {};
  await res.forEach((doc) => {
    data[doc.id] = doc.data();
  });

  return {
    props: {
      data,
    },
  };
}
