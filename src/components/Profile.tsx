import Image from "next/image";
import { ReactElement } from "react";

const Profile = (): ReactElement =>(
  <>
    <div className="flex flex-row w-full">
      <div className="w-1/2 mt-12">
        <h1 className="italic font-extrabold prose prose-2xl text-center">Philip M. Gollucci</h1>
        <h4 className="p-2 prose text-center underline">philip@gollucci.com</h4>
        <h4 className="p-2 text-base prose-sm prose text-center underline"><a href="https://calendly.com/pgollucci">Schedule a chat</a></h4>
      </div>
      <div className="w-1/3 mt-2 border-2">
        <Image className="rounded-full shadow-2xl max-h-36" src="/me.jpg" alt="Philip M. Gollucci" width={200} height={200} />
      </div>
    </div>
  </>
)

export default Profile;