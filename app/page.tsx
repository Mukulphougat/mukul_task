import Image from 'next/image'
import {SignIn} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-row h-full w-full items-center justify-between p-24">
      <div className={"w-2/6 h-full bg-gray-900"}>

      </div>
        <div className={"w-4/6"}>
            {/*<SignIn/>*/}
        </div>
    </main>
  )
}
