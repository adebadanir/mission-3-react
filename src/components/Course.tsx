import { useState } from "react"
import { StarRating } from "./star"

const Course = () => {
    const [isActive] = useState(0)
    const cards = Array.from({ length: 9 }, (_, index) => index + 1)
    return (
        <section className="flex max-w-[320px] flex-col gap-[24px] sm:h-auto sm:w-full sm:max-w-[1200px] sm:gap-[32px]">
            <div className="flex max-h-[102px] w-full max-w-[320px] flex-col gap-[10px] sm:h-auto sm:max-h-[67px] sm:w-auto sm:max-w-[632px]">
                <h3 className="heading-3 font-semibold">
                    Koleksi Video Pembelajaran Unggulan
                </h3>
                <p className="body-medium font-medium text-[#333333AD]">
                    Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                </p>
            </div>
            <div className="flex max-h-[50px] w-fit max-w-[320px] flex-row gap-[36px] overflow-x-auto sm:h-auto sm:max-h-[52px] sm:w-auto sm:max-w-[612px]">
                <Tab label="Semua Kelas" isActive={isActive === 1} />
                <Tab label="Pemasaran" isActive={isActive === 0} />
                <Tab label="Desain" isActive={isActive === 0} />
                <Tab label="Pengembangan Diri" isActive={isActive === 0} />
                <Tab label="Bisnis" isActive={isActive === 0} />
            </div>
            <div className="grid gap-[20px] sm:grid-cols-2 sm:grid-rows-3 sm:gap-[24px] lg:grid-cols-3">
                {cards.map((index) => (
                    <Card
                        key={index}
                        image={`image-${index}.jpeg`}
                        avatar={`avatar-${index}.png`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Course

function Tab({ label, isActive }: { label: string; isActive: boolean }) {
    return (
        <div className="h-max-[50px] flex h-auto w-auto flex-col sm:max-h-[52px] sm:max-w-full">
            <div className="flex h-[44px] w-auto max-w-full flex-col justify-center sm:h-auto sm:max-h-[46px] sm:max-w-full sm:py-[12px]">
                <p
                    className={`body-medium w-fit text-nowrap font-medium ${
                        isActive ? "text-[#333333AD]" : "text-[#F64920]"
                    }`}
                >
                    {label}
                </p>
            </div>
            <div
                className={`h-[6px] w-[52px] rounded-[10px] ${
                    isActive ? "display-none" : "bg-[#F64920]"
                }`}
            ></div>
        </div>
    )
}

function Card({ image, avatar }: { image?: string; avatar?: string }) {
    return (
        <div className="grid h-auto max-h-[147px] w-full max-w-[320px] grid-cols-3 grid-rows-1 gap-x-[12px] gap-y-[8px] rounded-[10px] border border-[#3A35411F] bg-[#FFFFFF] p-[16px] sm:flex sm:max-h-[426px] sm:max-w-[384px] sm:flex-col sm:gap-[16px] sm:p-[20px]">
            <div
                className="row-span-2 h-[82px] w-[82px] rounded-[10px] bg-cover bg-center sm:h-[193px] sm:w-full sm:max-w-[344px]"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="col-span-2 col-start-2 row-start-1 flex h-auto max-h-[38px] w-full max-w-[194px] flex-col sm:max-h-[74px] sm:max-w-[344px] sm:gap-[8px]">
                <h6 className="heading-6 font-semibold text-[#222325]">
                    Big 4 Auditor Financial Analyst
                </h6>
                <p className="sm:display-block body-medium hidden h-[44px] max-w-[344px] overflow-hidden truncate whitespace-pre-wrap font-medium text-[#333333AD]">
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                </p>
            </div>
            <div className="col-span-2 col-start-2 row-start-2 flex h-auto max-h-[37px] w-full max-w-[194px] items-center gap-[8px] sm:max-h-[42px] sm:max-w-[344px] sm:gap-[10px]">
                <img
                    src={avatar}
                    alt={avatar}
                    className="w-[36px h-[36px] rounded-[10px] sm:h-[40px] sm:w-[40px]"
                />
                <div className="sm:h-auto sm:max-h-[42px] sm:w-full sm:max-w-[294px]">
                    <p className="body-medium font-medium">Jenna Ortega</p>
                    <p className="body-small flex gap-[4px] font-normal text-[#333333AD]">
                        Senior Accountant
                        <span className="hidden sm:block">di</span>
                        <span className="hidden font-bold sm:block">Gojek</span>
                    </p>
                </div>
            </div>
            <div className="col-span-3 col-start-1 row-start-3 flex w-full max-w-[288px] items-center justify-between sm:h-auto sm:max-h-[29px] sm:max-w-[344px]">
                <div className="flex h-auto max-h-[18px] w-auto max-w-[143px] items-center gap-[8px] sm:max-h-[20px] sm:max-w-[151px]">
                    <div className="h-auto max-h-[18px] w-auto max-w-[90px]">
                        <StarRating rating={3.5} />
                    </div>
                    <p className="body-small text-nowrap font-medium text-[#333333AD] underline">
                        3.5 (86)
                    </p>
                </div>
                <h4 className="heading-4 font-semibold text-[#3ECF4C]">
                    Rp 300K
                </h4>
            </div>
        </div>
    )
}
