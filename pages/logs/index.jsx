import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Layout from "../../components/layout";

export default function Logs({ data }) {
  return (
    <>
      <div className="">
        <div className="flex flex-wrap justify-center">
          {Object.values(data).map((doc) => (
            <div className="max-w-sm rounded overflow-hidden shadow-md m-2 w-2/3 font-mono hover:shadow-lg hover:text-gray-600">
              <div className="px-6 py-4">
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

Logs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
