import Image from 'next/image'
import {SignIn} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen w-full items-center justify-between p-24">
      <div className={"w-1/3 min-h-screen bg-gray-900"}>

      </div>
        <div className={"w-2/3"}>
            {/*<SignIn/>*/}
        </div>
    </main>
  )
}
