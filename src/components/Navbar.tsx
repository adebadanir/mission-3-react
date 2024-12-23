const Navbar = () => {
  return (
    <header className="w-screen flex flex-col items-center border border-b-[#3A35411F] ">
      <nav className="flex items-center w-full max-w-[360px] max-h-[74px] px-[24px] py-[16px] sm:w-[1440px] sm:max-w-full h-auto sm:max-h-[80px] bg-white sm:px-[120px] sm:py-[12px] sm:gap-[36px]">
        <div className="flex w-full items-center justify-between sm:max-w-[1120px] h-auto sm:max-h-[56px]">
          <div className="w-[152px] h-[42px] sm:w-[237px] sm:h-[56px] flex items-center">
            <img
              src="logo.png"
              alt="logo"
              className="w-[144.77px] h-[22.56px] top-[9.75px] left-[3.25px] sm:w-[193.03px] sm:h-[30.08px] sm:top-[13px] sm:left-[22px]"
            />
          </div>
          <div className="hidden sm:block body-medium text-[#333333AD]">
            Kategori
          </div>
        </div>
        <img
          src="avatar-profile.png"
          alt="avatar-profile"
          className="hidden sm:block w-[44px] h-[44px] rounded-[10px]"
        />
        <div className="sm:hidden w-[24px] h-[24px] flex items-center">
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10.5V12.5H20V10.5H0ZM0 5.5V7.5H20V5.5H0ZM0 0.5V2.5H20V0.5H0Z"
              fill="#4A505C"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
