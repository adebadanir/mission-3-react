import LoginForm from "../components/LoginForm"
import Navbar from "../components/Navbar"

const Login = () => {
    return (
        <div className="flex min-h-screen w-screen flex-col items-center bg-[#fffdf3]">
            <header className="flex w-screen justify-center border border-b-[#3A35411F] bg-white">
                <Navbar />
            </header>
            <main className="flex flex-col items-center justify-center gap-[36px] sm:h-full sm:max-h-screen sm:w-[1440px] sm:px-[120px] sm:py-[64px]">
                <LoginForm />
            </main>
        </div>
    )
}

export default Login
