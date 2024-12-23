import { useState } from "react";
import { StarRating } from "./star";

const Course = () => {
  const [isActive] = useState(0);
  const cards = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <section className="flex flex-col max-w-[320px] max-h-[1683px] gap-[24px] sm:w-full sm:max-w-[1200px] sm:h-auto sm:max-h-[1525px] sm:gap-[32px]">
      <div className="flex flex-col w-full max-w-[320px] max-h-[102px]  gap-[10px] sm:w-auto sm:max-w-[632px] sm:h-auto sm:max-h-[67px]">
        <h3 className="heading-3 font-semibold">
          Koleksi Video Pembelajaran Unggulan
        </h3>
        <p className="body-medium font-medium text-[#333333AD]">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      <div className="flex flex-row overflow-x-auto w-fit max-w-[320px] max-h-[50px] sm:w-auto sm:max-w-[612px] sm:h-auto sm:max-h-[52px] gap-[36px]">
        <Tab label="Semua Kelas" isActive={isActive === 1} />
        <Tab label="Pemasaran" isActive={isActive === 0} />
        <Tab label="Desain" isActive={isActive === 0} />
        <Tab label="Pengembangan Diri" isActive={isActive === 0} />
        <Tab label="Bisnis" isActive={isActive === 0} />
      </div>
      <div className="grid gap-[20px] sm:grid-cols-3 sm:grid-rows-3 sm:gap-[24px]">
        {cards.map((index) => (
          <Card
            key={index}
            image={`image-${index}.jpeg`}
            avatar={`avatar-${index}.png`}
          />
        ))}
      </div>
    </section>
  );
};

export default Course;

function Tab({ label, isActive }: { label: string; isActive: boolean }) {
  return (
    <div className="flex flex-col w-auto h-max-[50px] sm:max-w-full h-auto sm:max-h-[52px]">
      <div className="flex flex-col justify-center max-w-full h-[44px] w-auto sm:max-w-full sm:h-auto sm:max-h-[46px] sm:py-[12px]">
        <p
          className={`w-fit body-medium font-medium text-nowrap ${
            isActive ? "text-[#333333AD]" : "text-[#F64920]"
          }`}
        >
          {label}
        </p>
      </div>
      <div
        className={`w-[52px] h-[6px] rounded-[10px] ${
          isActive ? "display-none" : "bg-[#F64920]"
        }`}
      ></div>
    </div>
  );
}

function Card({ image, avatar }: { image?: string; avatar?: string }) {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-x-[12px] gap-y-[8px] max-w-[320px] max-h-[147px] p-[16px] sm:flex sm:flex-col w-full sm:max-w-[384px] h-auto sm:max-h-[426px]  bg-[#FFFFFF] rounded-[10px] border border-[#3A35411F] sm:p-[20px] sm:gap-[16px]">
      <div
        className="row-span-2 w-[82px] h-[82px] sm:w-[344px] sm:h-[193px] rounded-[10px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="row-start-1 col-start-2 col-span-2 max-w-[194px] max-h-[38px] flex flex-col w-full sm:max-w-[344px] h-auto sm:max-h-[74px] sm:gap-[8px]">
        <h6 className="heading-6 text-[#222325] font-semibold">
          Big 4 Auditor Financial Analyst
        </h6>
        <p className="hidden sm:display-block body-medium font-medium text-[#333333AD] truncate whitespace-pre-wrap overflow-hidden max-w-[344px] h-[44px]">
          Mulai transformasi dengan instruktur profesional, harga yang
          terjangkau, dan kurikulum terbaik
        </p>
      </div>
      <div className="row-start-2 col-start-2 col-span-2 max-w-[194px] max-h-[37px] flex items-center gap-[8px] w-full sm:max-w-[344px] h-auto sm:max-h-[42px] sm:gap-[10px]">
        <img
          src={avatar}
          alt={avatar}
          className="w-[36px h-[36px] sm:w-[40px] sm:h-[40px] rounded-[10px]"
        />
        <div className="sm:w-full sm:max-w-[294px] sm:h-auto sm:max-h-[42px]">
          <p className="body-medium font-medium">Jenna Ortega</p>
          <p className="flex gap-[4px] body-small font-normal text-[#333333AD]">
            Senior Accountant
            <span className="hidden sm:block">di</span>
            <span className="font-bold hidden sm:block">Gojek</span>
          </p>
        </div>
      </div>
      <div className="row-start-3 col-start-1 col-span-3 max-w-[288px] flex items-center justify-between w-full sm:max-w-[344px] sm:h-auto sm:max-h-[29px]">
        <div className="flex items-center max-w-[143px] max-h-[18px] w-auto sm:max-w-[151px] h-auto sm:max-h-[20px] gap-[8px]">
          <div className="w-auto max-w-[90px] h-auto max-h-[18px]">
            <StarRating rating={3.5} />
          </div>
          <p className="body-small font-medium text-[#333333AD] text-nowrap underline">
            3.5 (86)
          </p>
        </div>
        <h4 className=" heading-4 font-semibold text-[#3ECF4C]">Rp 300K</h4>
      </div>
    </div>
  );
}
