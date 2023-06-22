"use client"
import {SignUp} from "@clerk/nextjs";

const SignUpPage = () => (
    <div className={"min-h-screen w-full grid place-items-center"}>
        <SignUp />
    </div>

);

export default SignUpPage;