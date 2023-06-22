import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
    <SignIn path="/auth/sign-in" routing="path" signUpUrl="/auth/sign-up" redirectUrl={"/"}/>
);

export default SignInPage;