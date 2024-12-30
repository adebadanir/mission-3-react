const Banner = () => {
    return (
        <section
            style={{ backgroundImage: "url(bg-banner.jpeg)" }}
            className="relative flex h-[400px] w-full max-w-[320px] flex-col items-center justify-center rounded-[4px] bg-cover bg-center px-[20px] py-[20px] before:absolute before:inset-0 before:z-0 before:rounded-[4px] before:bg-black before:bg-opacity-80 sm:h-[400px] sm:max-h-full sm:max-w-[1200px] sm:rounded-[4px]"
        >
            <div className="z-10 flex h-auto max-h-[304px] w-auto max-w-[280px] flex-col gap-[40px] sm:max-h-[216px] sm:max-w-[525px]">
                <div className="flex h-auto max-h-[168px] w-full max-w-[280px] flex-col gap-[4px] text-center sm:max-h-[118px] sm:w-auto sm:max-w-[525px]">
                    <p className="body-large font-medium text-[#C1C2C4]">
                        NEWSLETTER
                    </p>
                    <div className="flex max-h-[142px] w-full max-w-[280px] flex-col gap-[10px] sm:h-auto sm:max-h-[89px] sm:w-auto sm:max-w-[525px]">
                        <h3 className="heading-3 font-semibold text-white">
                            Mau Belajar Lebih Banyak?
                        </h3>
                        <p className="body-medium font-normal text-[#F4F5FA]">
                            Daftarkan dirimu untuk mendapatkan informasi terbaru
                            dan penawaran spesial dari program-program
                            terbaik&nbsp;hariesok.id
                        </p>
                    </div>
                </div>
                <div className="flex h-auto max-h-[96px] w-auto max-w-[280px] flex-col items-center gap-[16px] bg-transparent sm:max-h-[58ox] sm:w-full sm:max-w-[525px] sm:flex-row sm:gap-[20px] sm:rounded-[10px] sm:bg-white sm:py-[8px] sm:pl-[32px] sm:pr-[8px]">
                    <input
                        type="email"
                        placeholder="Masukan Emailmu"
                        className="body-medium h-auto max-h-[40px] w-[280px] rounded-[10px] bg-white py-[10px] pl-[12px] pr-[8px] text-center font-normal text-[#333333AD] sm:h-[22px] sm:w-[333px] sm:rounded-none sm:bg-transparent sm:p-0 sm:text-left"
                    />
                    <button className="item-center flex max-h-[40px] w-full max-w-[280px] justify-center rounded-[10px] bg-[#FFBD3A] px-[26px] py-[10px] sm:h-auto sm:max-h-[42px] sm:w-auto sm:max-w-[132px] sm:gap-[8px] sm:p-0 sm:px-[26px] sm:py-[10px]">
                        <span className="body-medium font-bold text-white">
                            Subscribe
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Banner
