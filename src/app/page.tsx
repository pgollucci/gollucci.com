import Link from "next/link";
import Banner from "../components/Banner";
import News from "../components/News";
import Pitch from "../components/Pitch";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-0 p-2">
      <Banner />
      <Profile />
      <Pitch />
      <p className="px-3 py-2 mb-4 text-xl font-medium rounded-md">Thought Leadership:</p>
      <News limit={4} />
      <Link href="/news" className="mt-8 text-2xl font-medium text-gray-600 rounded-md hover:bg-blue-300 hover:text-gray-900">More...</Link>
    </main>
  )
}
