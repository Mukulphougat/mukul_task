"use client"
import {Lato, Montserrat} from "next/font/google";
import Link from "next/link";
import React from "react";
import {SignedIn, SignedOut, UserProfile} from "@clerk/nextjs";
import SignInPageAfterSignout from "@/components/SignInPageAfterSignout";

const montserrat=Montserrat({subsets: ['latin']})
const latoFont=Lato({weight:"300",subsets: ['latin']})

export default function Settings() {
    return (
        <div className={"w-5/6 mx-14 max-h-screen"}>
            <div className={"flex flex-row w-full h-16 justify-between"}>
                <h1 className={"text-3xl font-bold " + montserrat.className}>Settings</h1>
            </div>

            <div className={"w-full bg-transparent h-4/5 grid place-items-center"}>
                <div className={"w-fit rounded-lg bg-transparent overflow-y-scroll h-full"}>
                    <UserProfile/>
                </div>
            </div>

        </div>
    )
    // <div className={"w-full flex flex-row justify-center my-5"}>
    // <SignOutButtonForProfile />
    // </div>
}