import { IoMdEyeOff } from "react-icons/io"

const RegisterForm = () => {
    return (
        <div className="flex h-auto max-h-[866px] w-full max-w-[320px] flex-col gap-[20px] rounded-[4px] border-[1px] border-[#F1F1F1] bg-[#FFFFFF] p-[20px] sm:max-h-[893px] sm:max-w-[590px] sm:gap-[36px] sm:p-[36px]">
            <div className="flex flex-col items-center gap-[10px] sm:h-auto sm:max-h-[67px] sm:w-auto sm:max-w-[525px]">
                <h3 className="heading-3 font-semibold">Pendaftaran Akun</h3>
                <p className="body-medium font-normal text-[#333333AD]">
                    Yuk, daftarkan akunmu sekarang juga!
                </p>
            </div>
            <div className="flex h-auto max-h-[750px] w-full max-w-[280px] flex-col gap-[20px] sm:max-h-[718px] sm:w-auto sm:max-w-[518px] sm:gap-[24px]">
                <div className="flex h-auto max-h-[656px] w-full max-w-[280px] flex-col gap-[24px] sm:max-h-[606px] sm:w-auto sm:max-w-[518px]">
                    <div className="flex h-auto max-h-[548px] w-full max-w-[280px] flex-col gap-[12px] sm:max-h-[482px] sm:max-w-[518px] sm:gap-[16px]">
                        <div className="h-auto max-h-[76px] w-full max-w-[280px] sm:max-h-[76px] sm:max-w-[518px]">
                            <label
                                htmlFor=""
                                className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] text-nowrap pb-[4px] pr-[16px] font-normal text-[#333333AD]"
                            >
                                Nama Lengkap
                                <span className="subtitle font-normal text-[#D32E1F]">
                                    *
                                </span>
                            </label>
                            <div className="flex h-auto max-h-[48px] w-full max-w-[280px] rounded-[6px] border-[1px] border-[#F1F1F1] px-[10px] py-[4px] sm:max-w-[518px]">
                                <input
                                    type="text"
                                    className="h-auto max-h-[40px] w-full max-w-[280px] gap-[8px] py-[8px] sm:max-w-[498px]"
                                />
                            </div>
                        </div>
                        <div className="h-auto max-h-[76px] w-full max-w-[280px] sm:max-h-[76px] sm:max-w-[518px]">
                            <label
                                htmlFor=""
                                className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] text-nowrap pb-[4px] pr-[16px] font-normal text-[#333333AD]"
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
                                className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] text-nowrap pb-[4px] pr-[16px] font-normal text-[#333333AD]"
                            >
                                No. Hp
                                <span className="subtitle font-normal text-[#D32E1F]">
                                    *
                                </span>
                            </label>
                            <div className="flex gap-[24px]">
                                <div className="flex">
                                    <div className="flex h-full max-h-[48px] w-[44px] items-center justify-center rounded-l-[6px] bg-[#F4F5FA] px-[10px] py-[4px]">
                                        <img
                                            src="flag.svg"
                                            alt=""
                                            className="h-[24px] w-[24px]"
                                        />
                                    </div>
                                    <div className="flex h-auto max-h-[48px] w-[78px] items-center justify-center rounded-r-[6px] border-[1px] px-[10px] py-[4px] sm:w-[112.67px]">
                                        <select
                                            name=""
                                            id=""
                                            className="flex h-auto max-h-[40px] w-[78px] items-center justify-center bg-transparent py-[8px] text-gray-700 focus:outline-none sm:w-[112.67px]"
                                        >
                                            <option value="+62" selected>
                                                +62
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex h-auto max-h-[48px] w-full max-w-[280px] rounded-[6px] border-[1px] border-[#F1F1F1] px-[10px] py-[4px] sm:max-w-[337.33px]">
                                    <input
                                        type="number"
                                        className="h-auto max-h-[40px] w-full max-w-[280px] appearance-none gap-[8px] py-[8px] sm:max-w-[498px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-auto max-h-[76px] w-full max-w-[280px] sm:max-h-[76px] sm:max-w-[518px]">
                            <label
                                htmlFor=""
                                className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] text-nowrap pb-[4px] pr-[16px] font-normal text-[#333333AD]"
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
                        <div className="h-auto max-h-[76px] w-full max-w-[280px] sm:max-h-[76px] sm:max-w-[518px]">
                            <label
                                htmlFor=""
                                className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] text-nowrap pb-[4px] pr-[16px] font-normal text-[#333333AD]"
                            >
                                Konfirmasi Kata Sandi
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
                            className="body-medium flex w-full justify-end font-medium text-[#333333AD]"
                        >
                            Lupa Password?
                        </a>
                    </div>
                    <div className="flex h-auto max-h-[84px] w-full max-w-[280px] flex-col gap-[16px] sm:max-h-[100px] sm:w-auto sm:max-w-[518px]">
                        <a
                            href="/register"
                            className="flex h-auto max-h-[34px] w-full max-w-[280px] items-center justify-center rounded-[10px] bg-[#3ECF4C] sm:max-h-[42px] sm:max-w-[518px]"
                        >
                            <p className="body-medium h-auto max-h-[34px] w-auto max-w-[90px] px-[22px] py-[7px] font-bold text-[#FFFFFF] sm:max-h-[42px] sm:max-w-[104px] sm:px-[26px] sm:py-[10px]">
                                Daftar
                            </p>
                        </a>
                        <a
                            href="/"
                            className="flex h-auto max-h-[34px] w-full max-w-[280px] items-center justify-center rounded-[10px] bg-[#E2FCD9CC] sm:max-h-[42px] sm:max-w-[518px]"
                        >
                            <p className="body-medium h-auto max-h-[34px] w-auto max-w-[90px] px-[22px] py-[7px] font-bold text-[#3ECF4C] sm:max-h-[42px] sm:max-w-[104px] sm:px-[26px] sm:py-[10px]">
                                Masuk
                            </p>
                        </a>
                    </div>
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
                            Daftar Dengan Google
                        </p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default RegisterForm
