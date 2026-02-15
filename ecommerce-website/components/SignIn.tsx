import Link from "next/link";

const SignIn = () => {
    return (
        <Link href="/login" className="text-sm font-medium hover:underline">
            <button className="text-sm font-medium hover:underline cursor-pointer" >Sign In</button>
        </Link>
    );
}
export default SignIn;