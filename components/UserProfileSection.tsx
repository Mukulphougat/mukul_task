import SignOutButtonForProfile from "@/components/SignOutButtonForProfile";
import React from "react";
import {User} from "@clerk/nextjs/api";
import {currentUser} from "@clerk/nextjs";
import {Montserrat} from "next/font/google";
const montserrat=Montserrat({subsets: ['latin']})
export default async function UserProfileSection() {
    const user: User | null = await currentUser();

    return (
        <div className={"w-full flex flex-col rounded-lg h-full bg-white"}>
            <div className={"w-full flex flex-row justify-center my-10"}>
                <img width={150} height={150} className={"rounded-full hover:scale-110 border-4 border-amber-300"}
                     src={user !== null ? user.imageUrl : ""} alt={"User Profile"}/>
            </div>
            <div className={"w-full flex flex-row justify-center my-5"}>
                <h1 className={"text-2xl font-medium " + montserrat.className}>{user?.firstName + " " + user?.lastName}</h1>
            </div>
            <div className={"w-full flex flex-row justify-center my-5"}>
                <h1 className={"text-2xl text-blue-400 underline hover:no-underline font-medium " + montserrat.className}>
                    <a href={`mailto:${user?.emailAddresses[0].emailAddress}`}>{user?.emailAddresses[0].emailAddress}</a>
                </h1>
            </div>
            <div className={"w-full flex flex-row justify-center my-5"}>
                <SignOutButtonForProfile/>
            </div>
        </div>
    )
}