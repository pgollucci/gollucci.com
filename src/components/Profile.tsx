import Image from "next/image";
import { ReactElement } from "react";

const Profile = (): ReactElement =>(
  <>
        <h1 className="italic font-extrabold prose prose-2xl text-center">Philip M. Gollucci</h1>
        <h4 className="p-2 prose text-center underline">philip@gollucci.com</h4>
        <h4 className="p-2 text-base prose-sm prose text-center underline"><a href="https://calendly.com/pgollucci">Schedule a chat</a></h4>
        <Image className="rounded-full shadow-2xl" src="/me.jpg" alt="Philip M. Gollucci" width={150} height={350} />
  </>
)

export default Profile;