const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "url(bg-hero.jpeg)" }}
      className="relative flex bg-center bg-cover flex-col max-w-[320px] rounded-[10px] px-[20px] py-[37px] gap-[24px] w-full sm:max-w-[1200px] sm:h-[400px] sm:max-h-full sm:rounded-[10px] sm:pt-[68.5px] sm:px-[140px] sm:pb-[50.5px] sm:gap-[24px] before:absolute before:inset-0 before:bg-black before:bg-opacity-80 before:rounded-[10px] before:z-0"
    >
      <div className=" z-10 flex flex-col max-w-[280px] max-h-[262px] w-full sm:max-w-[920px] h-auto sm:max-h-[215px] gap-[12px]">
        <h1 className="flex flex-col justify-start heading-1 sm:w-[920px] sm:h-[159px] text-white text-center">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="body-medium font-medium text-white text-center">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
      </div>
      <button className="z-10 body-medium font-normal sm:font-bold text-center text-nowrap mx-auto w-full max-w-[280px] max-h-[40px] px-[0px] py-[10px] text-white sm:w-auto sm:max-w-[369px] sm:h-auto sm:max-h-[42px] sm:px-[26px] sm:py-[10px] rounded-[10px] bg-[#3ECF4C]">
        Temukan Video Course untuk Dipelajari!
      </button>
    </section>
  );
};

export default Hero;
