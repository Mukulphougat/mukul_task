"use client"
import {Lato, Montserrat} from "next/font/google";
import Link from "next/link";
import React from "react";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import TransactionTable from "@/components/transactionTable";
import SignInPageAfterSignout from "@/components/SignInPageAfterSignout";

const montserrat=Montserrat({subsets: ['latin']})
const latoFont=Lato({weight:"300",subsets: ['latin']})

export default function Transactions() {
    return (
        <>
            <SignedIn>
                <div className={"text-black min-h-screen w-full  bg-gray-100 flex flex-row p-10"}>
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
                                    <h1 className={"mx-4 text-white font-bold " + montserrat.className}>Transactions</h1>
                                </Link>
                                <Link href={"/schedules"} className={"flex my-2 flex-row"}>
                                    <img src={"img_2.png"} alt={"icon"} height={16} width={18}/>
                                    <h1 className={"mx-4 text-white " + montserrat.className}>Schedules</h1>
                                </Link>
                                <Link href={"/profile"} className={"flex my-2 flex-row"}>
                                    <img src={"img_3.png"} alt={"icon"} height={16} width={18}/>
                                    <h1 className={"mx-4 text-white " + montserrat.className}>Profile</h1>
                                </Link>
                                <Link href={"/settings"} className={"flex my-2 flex-row"}>
                                    <img src={"img_4.png"} alt={"icon"} height={16} width={18}/>
                                    <h1 className={"mx-4 text-white " + montserrat.className}>Settings</h1>
                                </Link>
                            </div>
                            <div className={"my-4 flex flex-col"}>
                                <a href={"mailto:mukulphoughatabc@gmail.com"}
                                   className={"text-sm text-white " + montserrat.className}>Help</a>
                                <a href={"mailto:mukulphoughat@gmail.com"}
                                   className={"text-sm text-white " + montserrat.className}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className={"w-5/6 mx-14"}>
                        <div className={"flex flex-row w-full h-16 justify-between"}>
                            <h1 className={"text-3xl font-bold " + montserrat.className}>Transactions</h1>
                            {/*<div className={"my-2 h-12 flex flex-row w-1/4 p-2 rounded-lg"}>*/}
                            {/*    <div className={"flex flex-row justify-between bg-white rounded-lg"}>*/}
                            {/*        <input placeholder={"Search..."}*/}
                            {/*               className={"placeholder:translate-x-3 focus:outline-none focus:placeholder-white w-3/4 h-8 bg-white rounded-lg"}/>*/}
                            {/*        <svg className={"my-2 mx-2"} width="20" height="20" viewBox="0 0 13 12"*/}
                            {/*             fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*            <circle cx="5" cy="5" r="4.5" stroke="#858585"/>*/}
                            {/*            <line x1="8.35355" y1="7.64645" x2="12.3536" y2="11.6464" stroke="#858585"/>*/}
                            {/*        </svg>*/}
                            {/*    </div>*/}
                            {/*    <div className={"mx-4 h-10 p-1"}>*/}
                            {/*        <svg width="20" height="25" viewBox="0 0 18 20" fill="none"*/}
                            {/*             xmlns="http://www.w3.org/2000/svg">*/}
                            {/*            <path*/}
                            {/*                d="M16 11.586V8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8V11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14V16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15H2V14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12V8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8V12C14 12.266 14.105 12.52 14.293 12.707L16 14.414V15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18H6.182C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z"*/}
                            {/*                fill="black"/>*/}
                            {/*        </svg>*/}
                            {/*    </div>*/}
                            {/*    /!*<img className="w-10 h-8 rounded-full" src={"img_6.png"}*!/*/}
                            {/*    /!*     alt="Rounded avatar"/>*!/*/}
                            {/*    <UserButton/>*/}
                            {/*</div>*/}
                        </div>
                        <div className={"w-full h-fit rounded-lg bg-white text-black"}>

                            <TransactionTable/>
                        </div>
                    </div>

                </div>
            </SignedIn>
            <SignedOut>
                {/*<div className={"w-full min-h-screen grid place-items-center"}>*/}
                {/*    <SignIn/>*/}
                {/*</div>*/}
                <SignInPageAfterSignout/>

            </SignedOut>
        </>
    )
}