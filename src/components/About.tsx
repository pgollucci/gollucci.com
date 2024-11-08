import type { ReactElement } from 'react'
import Image from 'next/image'

function About(): ReactElement {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <Image
            className="rounded-full"
            src="/animal.jpg"
            alt="animal"
            width={450}
            height={250}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl">Fostered over 350 dogs.</h4>
          <ul className="ml-8 list-disc">
            <li>Part of a volunteer team responsible for saving cats and dogs all over the world. Over 20k dogs and cats have been saved from over 10 states and 5 countries since 2009.</li>
            <li>Represented Lucky Dog Animal Rescue at AWS Worldwide Public Sector Summit in 2019.</li>
            <li>1st place national fund-raising team for Best Friends Society.</li>
            <li>National crisis response to all US hurricanes in 2018.</li>
            <li>Puerto Rico earthquake response in 2019: 14,000 pounds of food & water, and rescue of 78 dogs.</li>
            <li>Puerto Rico COVID-19 2020 foster & recuse of 62 dogs.</li>
            <li>Traveled to Puerto Rico, Thailand, and Hawaii (for Kauai Humane Society) rescuing animals from high kill shelters.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div>
          <Image
            className="rounded-full"
            src="/awscb.png"
            alt="animal"
            width={450}
            height={250}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl">One of ~2,000 World Wide in this VIP AWS Program.</h4>
          <ul className="ml-8 list-disc">
            <li>Lead winning (1st place) World Wide Public Sector Team, May 2020</li>
            <li>Placed in the top 0.001% of AWS Challenges at Worldwide Public Sector AWS Summit June 30, 2020</li>
            <li>AWS SysOps Associate Exam Contributor, November 2019</li>
            <li>AWS Security Specialty Exam Question Author,, May 2021</li>
            <li>CDK.dev member, AWS CDK, CDK8s, CDKtf, and projen contributor</li>
            <li>Member, AWS Worldwide Public Sector Partner Advisory Council</li>
            <li>Member, AWS IQ Experts (verified)</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div>
          <Image
            className="rounded-full"
            src="/asf.png"
            alt="animal"
            width={450}
            height={250}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl">Vice President of Apache Software Foundation Infrastructure (World Wide)</h4>
          <h5 className="text-center italic">THE WORLD&apos;S LARGEST OPEN SOURCE FOUNDATION</h5>
          <ul className="ml-8 list-disc">
            <li>Held root@ for 4yrs</li>
            <li>Managed Global Infrastructure Budget, Data Centers, and Staff</li>
            <li>Project Management Committee: httpd, apr, apreq, mod_perl</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div>
          <Image
            className="rounded-full"
            src="/fbsd.jpg"
            alt="animal"
            width={450}
            height={250}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl">18th most changes to FreeBSD ports World Wide.</h4>
          <ul className="ml-8 list-disc">
            <li>Instrumental in Apache Software Foundation, ruby, and perl ports</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
