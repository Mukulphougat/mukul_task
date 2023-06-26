"use client"
import Link from "next/link";
import React from "react";
import {Montserrat} from "next/font/google";
const montserrat=Montserrat({subsets: ['latin']});
export default function HeaderForProfile(){
    return (
        <div className={"w-1/6 flex flex-col rounded-2xl bg-black"}>
            <div className={"mx-2 h-24 p-5"}>
                <h1 className={"text-4xl text-white font-bold " + montserrat.className}>Board.</h1>
            </div>
            <div className={"mx-7 flex flex-col h-full justify-between top-10"}>
                <div className={"my-4 flex flex-col"}>
                    <Link href={"/dashboard"} className={"flex my-2 flex-row"}>
                        <img src={"img.png"} alt={"icon"} height={16} width={18}/>
                        <h1 className={"mx-4 text-white " + montserrat.className}>Dashboard</h1>
                    </Link>
                    <Link href={"/transactions"} className={"flex my-2 flex-row"}>
                        <img src={"img_1.png"} alt={"icon"} height={16} width={18}/>
                        <h1 className={"mx-4 text-white " + montserrat.className}>Transactions</h1>
                    </Link>
                    <Link href={"/schedules"} className={"flex my-2 flex-row"}>
                        <img src={"img_2.png"} alt={"icon"} height={16} width={18}/>
                        <h1 className={"mx-4 text-white " + montserrat.className}>Schedules</h1>
                    </Link>
                    <Link href={"/profile"} className={"flex my-2 flex-row"}>
                        <img src={"img_3.png"} alt={"icon"} height={16} width={18}/>
                        <h1 className={"mx-4 text-white font-bold " + montserrat.className}>Profile</h1>
                    </Link>
                    <Link href={"/settings"} className={"flex my-2 flex-row"}>
                        <img src={"img_4.png"} alt={"icon"} height={16} width={18}/>
                        <h1 className={"mx-4 text-white " + montserrat.className}>Settings</h1>
                    </Link>
                </div>
                <div className={"my-4 flex flex-col"}>
                    <a href={"mailto:mukulphoughatabc@gmail.com"}
                       className={"text-sm text-white " + montserrat.className}>Help</a>
                    <a href={"mailto:mukulphoughatabc@gmail.com"}
                       className={"text-sm text-white " + montserrat.className}>Contact Us</a>
                </div>
            </div>
        </div>
    )
}