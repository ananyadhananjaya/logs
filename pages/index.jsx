import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-wrap content-center justify-center">
        <div className="">
          <div className="m-3 text-center font-sans font-bold tracking-wide space-y-2 text-2xl md:text-3xl lg:text-5xl">
            <p className="text-yellow-600">Hi. My name is AX. </p>
            <p className="text-yellow-500">How randome are your thoughts? Find random logs from random people.</p>
            <p className="text-yellow-500">Feel free to add on.</p>
          </div>
          <div className="flex justify-center space-x-3 ">
            <div>
              <Link href="/logs">
                <button className="bg-yellow-500 hover:bg-yellow-600 px-10 py-2 font-mono text-lg text-white rounded-md">
                  logs
                </button>
              </Link>
            </div>
            <div>
              <Link href="/createLogs">
                <button className="bg-yellow-500 hover:bg-yellow-600 px-10 py-2 font-mono text-lg text-white rounded-md">
                  create logs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
