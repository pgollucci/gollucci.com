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
            alt="Lucky Dog Animal Rescue volunteer work"
            width={450}
            height={250}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl">Volunteer Animal Rescue</h4>
          <p>Part of a volunteer team responsible for saving cats and dogs worldwide. Over 28,000 dogs and cats have been saved from over 10 states and 5 countries since 2009.</p>
          <ul className="ml-8 list-disc">
            <li>Fostered over 400 dogs.</li>
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
            alt="AWS Community Builder recognition"
            width={450}
            height={250}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl">Two time AWS Community Builder, 2021 to 2022 (alumni), one of about 2,000 world wide.</h4>
          <ul className="ml-8 list-disc">
            <li>Led the winning (1st place) World Wide Public Sector team, May 2020</li>
            <li>Placed in the top 0.001% of AWS Challenges at Worldwide Public Sector AWS Summit June 30, 2020</li>
            <li>AWS SysOps Associate Exam Contributor, November 2019</li>
            <li>AWS Security Specialty Exam Question Author, May 2021</li>
            <li>CDK.dev member; contributed to AWS CDK, CDK8s, CDKtf, and projen</li>
            <li>Past member, AWS Worldwide Public Sector Partner Advisory Council</li>
            <li>Past member, AWS IQ Experts (verified)</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div>
          <Image
            className="rounded-full"
            src="/asf.png"
            alt="Apache Software Foundation leadership"
            width={450}
            height={250}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl">Vice President of Infrastructure, Apache Software Foundation (2009 to 2011)</h4>
          <h5 className="text-center italic">THE WORLD&apos;S LARGEST OPEN SOURCE FOUNDATION</h5>
          <ul className="ml-8 list-disc">
            <li>Held root@ for 4yrs</li>
            <li>Managed Global Infrastructure Budget, Data Centers, and Staff</li>
            <li>Served on the Project Management Committees for httpd, apr, apreq, and mod_perl</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div>
          <Image
            className="rounded-full"
            src="/fbsd.jpg"
            alt="FreeBSD contribution milestone"
            width={450}
            height={250}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl">18th most changes to the FreeBSD ports tree world wide (committer, 2008 to 2015).</h4>
          <ul className="ml-8 list-disc">
            <li>Maintained the Apache Software Foundation, ruby, and perl ports</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
