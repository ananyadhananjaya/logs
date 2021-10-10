import Link from 'next/link';

export default function Home() {
  return (
    <> this is main page
    <div></div>
    <div><Link href="/logs">logs</Link></div>
    <div><Link href="/createLogs">Create logs</Link></div>
    </>
  )
}
