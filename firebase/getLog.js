import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default async function getLog() {
  const querySnapshot = await getDocs(collection(db, "logs"));
  return querySnapshot;
}

export async function getStaticProps() {
  const res = await getDocs(collection(db, "logs"));
  const ans = await res;
  return {
    props: {
      logs: ans,
    },
  };
}
