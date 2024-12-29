const Footer = () => {
  return (
    <div className="flex flex-col sm:w-[1440px] sm:h-auto sm:max-h-[427px] sm:px-[120px] sm:py-[60px] sm:gap-[20px]">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <img src="logo.png" alt="" />
          <div className="">
            <p>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>
        </div>
        <div className="flex">
          <div className="">
            Kategori
            <div className="flex flex-col">
              <a href="">Digital & Teknologi</a>
              <a href="">Pemasaran</a>
              <a href="">Manajemen Bisnis</a>
              <a href="">Pengembangan Diri</a>
              <a href="">Desain</a>
            </div>
          </div>
          <div className="">
            Perusahaan
            <div className="flex flex-col">
              <a href="">Tentang Kami</a>
              <a href="">FAQ</a>
              <a href="">Kebijakan Privasi</a>
              <a href="">Ketentuan Layanan</a>
              <a href="">Bantuan</a>
            </div>
          </div>
          <div className="">
            Komunitas
            <div className="flex flex-col">
              <a href="">Tips Sukses</a>
              <a href="">Blog</a>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:border-b-[1px] sm:border-[#3A35411F]"></div>
      <div className="flex justify-between">
        <p>@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="">sosmed</div>
      </div>
    </div>
  );
};

export default Footer;
