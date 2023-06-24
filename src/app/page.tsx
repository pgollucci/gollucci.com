import Link from "next/link";
import Banner from "../components/Banner";
import News from "../components/News";
import Pitch from "../components/Pitch";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-0 p-2">
      <div><Banner /></div>
        <div className="flex flex-col m-1">
          <div className="flex flex-row">
            <div className="flex w-1/3 h-24"><Profile /></div>
            <div className="flex w-full m-4"><Pitch /></div>
          </div>
          <div className="mt-8">
            <p className="px-3 py-2 mb-4 text-xl font-medium rounded-md">Latest News:</p>
            <News limit={4} />
          </div>
          <Link href="/news" className="mt-8 text-2xl font-medium text-gray-600 rounded-md hover:bg-blue-300 hover:text-gray-900">More...</Link>
      </div>
    </main>
  )
}
