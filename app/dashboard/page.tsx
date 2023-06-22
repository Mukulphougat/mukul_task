"use client"
import {SignOutButton} from "@clerk/nextjs";

export default function Dashboard(){
    return(
        <div className={"text-black bg-amber-200"}>
            <h1>DashBoard</h1>
            <div onClick={()=>console.log('Clicked')}>
                <SignOutButton />

            </div>
        </div>
    )
}