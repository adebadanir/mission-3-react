const LoginForm = () => {
    return (
        <div className="border border-[#F1F1F1] bg-[#FFFFFF] sm:h-auto sm:max-h-[617px] sm:w-[590px] sm:rounded-[4px] sm:p-[36px]">
            <div className="flex flex-col items-center justify-center sm:max-h-[67px] sm:max-w-[525ox] sm:gap-[10px]">
                <h1 className="heading-3 font-semibold">Masuk Ke Akun</h1>
                <p className="body-medium font-normal">
                    Yuk, lanjutin belajarmu di videobelajar.
                </p>
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        <div className="flex flex-col">
                            <label htmlFor="">
                                E-mail <span>*</span>
                            </label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col">
                            <label htmlFor="">
                                Kata Sandi <span>*</span>
                            </label>
                            <div className="">
                                <input type="password" />
                                <button>x</button>
                            </div>
                        </div>
                    </div>
                    <a
                        href=""
                        className="body-medium flex w-full justify-end font-medium"
                    >
                        Lupa Password?
                    </a>
                </div>
                <div className="flex flex-col">
                    <button>Masuk</button>
                    <button>Daftar</button>
                </div>
            </div>
            <div className="">Atau</div>
            <button>Masuk dengan Google</button>
        </div>
    )
}

export default LoginForm
