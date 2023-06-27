'use client'
import {SignOutButton} from "@clerk/nextjs";
import {Montserrat} from "next/font/google";
import {useRouter} from "next/navigation";
const montserrat=Montserrat({subsets: ['latin']})
export default function SignInPageAfterSignout(){
    const router=useRouter();
    return(
        <div className={"w-full bg-white min-h-screen grid place-items-center"}>
            <div className={"w-1/2 h-40 flex flex-col"}>
                <h1 className={"text-black my-10 mx-auto text-2xl "+montserrat.className}>!ERROR PLEASE SIGN IN</h1>
                <button className={"w-40 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 border border-blue-700 rounded"}>
                    <div onClick={()=>router.push("/")} className={montserrat.className}>
                        Go to Sign In
                    </div>
                </button>
            </div>
        </div>
    )
}