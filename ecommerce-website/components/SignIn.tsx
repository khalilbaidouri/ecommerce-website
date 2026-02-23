import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const SignIn = () => {
    return (
        <SignInButton mode="modal">
            <button className="text-sm font-medium hover:underline cursor-pointer" >Sign In</button>

        </SignInButton>
    );
}
export default SignIn;