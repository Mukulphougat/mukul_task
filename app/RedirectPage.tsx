"use client"
import {useRouter} from "next/navigation";
import {Montserrat} from "next/font/google";

const montserrat=Montserrat({subsets:['latin']})

export default () => {
    const router=useRouter()
    return(
        <button className={"bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 border border-blue-700 rounded"} onClick={()=>router.push("/dashboard")}>
            <span className={montserrat.className}>Continue</span>
        </button>
    )
}