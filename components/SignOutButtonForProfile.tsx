"use client"
import {Montserrat} from "next/font/google";
import {SignOutButton} from "@clerk/nextjs";

const montserrat=Montserrat({subsets: ['latin']});
export default function SignOutButtonForProfile(){
    return (
        <button className={"w-40 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 border border-blue-700 rounded"}>
            <div className={montserrat.className}>
                <SignOutButton/>
            </div>
        </button>
    )
}