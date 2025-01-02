import { IoMdEyeOff } from "react-icons/io"

const LoginForm = () => {
    return (
        <div className="flex h-auto max-h-[514px] w-full max-w-[320px] flex-col gap-[20px] border border-[#F1F1F1] bg-[#FFFFFF] p-[20px] sm:max-h-[617px] sm:min-w-[590px] sm:gap-[36px] sm:rounded-[4px] sm:p-[36px]">
            <div className="flex h-auto max-h-[56px] w-full max-w-[280px] flex-col items-center justify-center gap-[10px] sm:max-h-[67px] sm:max-w-[525px]">
                <h1 className="heading-3 font-semibold">Masuk Ke Akun</h1>
                <p className="body-medium font-normal text-[#333333AD]">
                    Yuk, lanjutin belajarmu di videobelajar.
                </p>
            </div>
            <div className="flex h-auto max-h-[304px] w-full max-w-[280px] flex-col gap-[24px] sm:max-h-[330px] sm:w-auto sm:max-w-[518px]">
                <div className="flex h-auto max-h-[196px] w-full max-w-[280px] flex-col gap-[12px] sm:max-h-[206px] sm:max-w-[518px] sm:gap-[16px]">
                    <div className="h-auto max-h-[76px] w-full max-w-[280px] sm:max-h-[76px] sm:max-w-[518px]">
                        <label
                            htmlFor=""
                            className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] pb-[4px] pr-[16px] font-normal text-[#4A505C]"
                        >
                            E-Mail
                            <span className="subtitle font-normal text-[#D32E1F]">
                                *
                            </span>
                        </label>
                        <div className="flex h-auto max-h-[48px] w-full max-w-[280px] rounded-[6px] border-[1px] border-[#F1F1F1] px-[10px] py-[4px] sm:max-w-[518px]">
                            <input
                                type="email"
                                className="h-auto max-h-[40px] w-full max-w-[280px] gap-[8px] py-[8px] sm:max-w-[498px]"
                            />
                        </div>
                    </div>
                    <div className="h-auto max-h-[76px] w-full max-w-[280px] sm:max-h-[76px] sm:max-w-[518px]">
                        <label
                            htmlFor=""
                            className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] pb-[4px] pr-[16px] font-normal text-[#4A505C]"
                        >
                            Kata Sandi
                            <span className="subtitle font-normal text-[#D32E1F]">
                                *
                            </span>
                        </label>
                        <div className="flex h-auto max-h-[48px] w-full max-w-[280px] items-center rounded-[6px] border-[1px] border-[#F1F1F1] px-[10px] py-[4px] sm:max-w-[518px]">
                            <input
                                type="Password"
                                className="h-auto max-h-[40px] w-full max-w-[280px] gap-[8px] py-[8px] sm:max-w-[498px]"
                            />
                            <button className="flex h-[24px] w-[24px] items-center justify-center">
                                <IoMdEyeOff className="h-[24px] w-[24px] text-[#6C717A]" />
                            </button>
                        </div>
                    </div>
                    <a
                        href=""
                        className="body-medium flex w-full justify-end font-medium text-[#4A505C]"
                    >
                        Lupa Password?
                    </a>
                </div>
                <div className="flex h-auto max-h-[84px] w-full max-w-[280px] flex-col gap-[16px] sm:max-h-[100px] sm:w-auto sm:max-w-[518px]">
                    <a
                        href="/dashboard"
                        className="flex h-auto max-h-[34px] w-full max-w-[280px] items-center justify-center rounded-[10px] bg-[#3ECF4C] sm:max-h-[42px] sm:max-w-[518px]"
                    >
                        <p className="body-medium h-auto max-h-[34px] w-auto max-w-[90px] px-[22px] py-[7px] font-bold text-[#FFFFFF] sm:max-h-[42px] sm:max-w-[104px] sm:px-[26px] sm:py-[10px]">
                            Masuk
                        </p>
                    </a>
                    <a
                        href="/register"
                        className="flex h-auto max-h-[34px] w-full max-w-[280px] items-center justify-center rounded-[10px] bg-[#E2FCD9CC] sm:max-h-[42px] sm:max-w-[518px]"
                    >
                        <p className="body-medium h-auto max-h-[34px] w-auto max-w-[90px] px-[22px] py-[7px] font-bold text-[#3ECF4C] sm:max-h-[42px] sm:max-w-[104px] sm:px-[26px] sm:py-[10px]">
                            Daftar
                        </p>
                    </a>
                </div>
            </div>

            <div className="relative my-[0px] h-auto max-h-[20px] w-full max-w-[280px] gap-[10px] sm:my-0 sm:max-h-[22px] sm:max-w-[518px]">
                <hr className="border-[#F1F1F1]" />
                <span className="body-medium absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-[8px] font-normal text-[#4A505C]">
                    atau
                </span>
            </div>
            <button className="flex h-[34px] w-full max-w-[280px] items-center justify-center rounded-[10px] border-[1px] border-[#F1F1F1] sm:h-[42px] sm:max-w-[518px]">
                <div className="flex items-center gap-[8px] px-[26px] py-[8px] sm:h-auto sm:max-h-[38px] sm:w-auto sm:max-w-[249px]">
                    <div className="flex items-center gap-[8px] sm:h-auto sm:max-h-[22px] sm:w-auto sm:max-w-[197px]">
                        <img src="logos_google-icon.svg" alt="google-logo" />
                        <p className="body-medium text-nowrap font-bold text-[#4A505C]">
                            Masuk Dengan Google
                        </p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default LoginForm
