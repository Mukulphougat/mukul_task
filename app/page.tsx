import Image from 'next/image'
import {SignIn} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-row h-full w-full items-center justify-between p-24">
      <div className={"w-2/6 grid place-items-center h-full bg-gray-900"}>
        <h1 className={"text-white text-3xl"}>Board</h1>
      </div>
        <div className={"w-4/6"}>
            {/*<SignIn/>*/}
        </div>
    </main>
  )
}
