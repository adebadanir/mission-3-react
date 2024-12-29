const Banner = () => {
  return (
    <section
      style={{ backgroundImage: "url(bg-banner.jpeg)" }}
      className="relative flex bg-center bg-cover flex-col justify-center items-center max-w-[320px] h-[400px] px-[20px] py-[20px] rounded-[4px] w-full sm:max-w-[1200px] sm:h-[400px] sm:max-h-full sm:rounded-[4px] before:absolute before:inset-0 before:bg-black before:bg-opacity-80 before:rounded-[4px] before:z-0"
    >
      <div className=" z-10 flex flex-col max-w-[280px] max-h-[304px] w-auto sm:max-w-[525px] h-auto sm:max-h-[216px] gap-[40px]">
        <div className="flex flex-col text-center w-full max-w-[280px] max-h-[168px] gap-[4px] sm:w-auto sm:max-w-[525px] h-auto sm:max-h-[118px]">
          <p className="body-large font-medium text-[#C1C2C4]">NEWSLETTER</p>
          <div className="flex flex-col gap-[10px] w-full max-w-[280px] max-h-[142px] sm:w-auto sm:max-w-[525px] sm:h-auto sm:max-h-[89px]">
            <h3 className="heading-3 text-white font-semibold">
              Mau Belajar Lebih Banyak?
            </h3>
            <p className="body-medium font-normal text-[#F4F5FA]">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik&nbsp;hariesok.id
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center bg-transparent w-auto max-w-[280px] max-h-[96px] gap-[16px] sm:bg-white sm:w-full sm:max-w-[525px] h-auto sm:max-h-[58ox] sm:py-[8px] sm:pr-[8px] sm:pl-[32px] sm:rounded-[10px] sm:gap-[20px]">
          <input
            type="email"
            placeholder="Masukan Emailmu"
            className="body-medium font-normal text-center sm:text-left text-[#333333AD] bg-white w-[280px] h-auto max-h-[40px] rounded-[10px] py-[10px] pr-[8px] pl-[12px] sm:w-[333px] sm:h-[22px] sm:p-0 sm:bg-transparent sm:rounded-none"
          />
          <button className="flex item-center justify-center bg-[#FFBD3A] w-full px-[26px] py-[10px] sm:p-0 max-w-[280px] max-h-[40px] sm:w-auto sm:max-w-[132px] sm:h-auto sm:max-h-[42px] sm:px-[26px] sm:py-[10px] rounded-[10px] sm:gap-[8px]">
            <span className=" body-medium font-bold text-white">Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
