"use client"
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
    <div className={"min-h-screen w-full grid place-items-center"}>
        <SignIn />
    </div>
);

export default SignInPage;