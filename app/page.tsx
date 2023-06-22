"use client"
import {Montserrat} from "next/font/google";
import SignInPage from "@/app/auth/signin/page";
import {SignIn} from "@clerk/nextjs";
const montserrat=Montserrat({subsets: ['latin']})


export default function Home() {
  return (
    <main className="flex flex-row h-full w-full items-center justify-between">
      <div className={"w-2/5 grid place-items-center h-screen bg-black"}>
        <h1 className={"text-white font-bold text-6xl "+montserrat.className}>Board.</h1>
      </div>
        <div className={"w-3/5 grid place-items-center h-screen  bg-white"}>
            {/*<div className={"bg-amber-200 w-1/2 h-4/6 rounded-lg p-6"}>*/}
            {/*    <div className={montserrat.className}>*/}
            {/*        <h1 className={"text-4xl font-bold text-black"}>SignIn</h1>*/}
            {/*    </div>*/}
            {/*    <h1 className={"text-black"}>Sign in to your account</h1>*/}
            {/*</div>*/}
            <SignIn />

        </div>
    </main>
  )
}
