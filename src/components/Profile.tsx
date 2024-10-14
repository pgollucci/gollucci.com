import type { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Profile(): ReactElement {
  return (
    <>
      <h1 className="prose prose-2xl text-center font-extrabold italic">Philip M. Gollucci</h1>
      <h4 className="prose p-2 text-center underline"><Link href="mailto:philip@gollucci.com">philip@gollucci.com</Link></h4>
      <h4 className="prose prose-sm p-2 text-center text-base underline"><a href="https://calendly.com/pgollucci">Schedule a chat</a></h4>
      <Image className="rounded-full shadow-2xl" src="/me.jpg" alt="Philip M. Gollucci" width={150} height={350} />
    </>
  )
}

export default Profile
