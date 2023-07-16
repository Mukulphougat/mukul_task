import '../globals.css'
import React from "react";
import Header from "@/components/Header";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import SignInPageAfterSignout from "@/components/SignInPageAfterSignout";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
            <html lang="en">
            <body className={"max-h-screen w-full"}>
                <SignedIn>
                    <div className={"text-black min-h-screen w-full bg-gray-100 flex flex-row p-10"}>
                        <Header />
                        {children}
                    </div>
                </SignedIn>
                <SignedOut>
                    <SignInPageAfterSignout/>
                </SignedOut>
            </body>
            </html>
    )
}
