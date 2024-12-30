import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
} from "lucide-react"
import { MdArrowForwardIos } from "react-icons/md"
import { ReactNode } from "react"

const Footer = () => {
    return (
        <div className="flex h-auto max-h-[424px] w-[360px] flex-col gap-[16px] p-[20px] lg:max-h-[427px] lg:w-full lg:max-w-[1440px] lg:gap-[20px] lg:px-[120px] lg:py-[60px]">
            <div className="flex h-auto max-h-[260px] w-full max-w-[320px] flex-col gap-[16px] lg:max-h-[199px] lg:max-w-[1200px] lg:flex-row lg:justify-between">
                <div className="flex h-auto max-h-[148px] w-full max-w-[320px] flex-col gap-[16px] lg:max-h-[190px] lg:w-auto lg:max-w-[352px]">
                    <div className="h-[36px] w-[170px] lg:h-[56px] lg:w-[204px]">
                        <img
                            src="logo.png"
                            alt=""
                            className="ml-[3.79px] mt-[5.44px] h-[25.18px] w-[161.61px] lg:ml-[5px] lg:mt-[13px] lg:h-[30.08px] lg:w-[193.03px]"
                        />
                    </div>
                    <div className="flex h-auto max-h-[96px] w-full max-w-[320px] flex-col gap-[8px] lg:max-h-[118px] lg:w-auto lg:max-w-[352px] lg:gap-[12px]">
                        <p className="body-large h-[40px] w-[320px] font-bold text-[#222325] lg:h-[50px] lg:w-[352px]">
                            Gali Potensi Anda Melalui Pembelajaran Video di
                            hariesok.id!
                        </p>
                        <p className="body-medium h-[20px] font-normal text-[#222325]">
                            Jl. Usman Effendi No. 50 Lowokwaru, Malang
                        </p>
                        <p className="body-medium h-[20px] font-normal text-[#222325]">
                            +62-877-7123-1234
                        </p>
                    </div>
                </div>
                <div className="flex h-auto max-h-[96px] w-full max-w-[320px] flex-col gap-[12px] lg:max-h-[199px] lg:w-auto lg:max-w-[485px] lg:flex-row lg:gap-[48px]">
                    <div className="flex flex-col lg:h-auto lg:max-h-[199px] lg:w-auto lg:max-w-[150px] lg:gap-[15px]">
                        <button className="flex w-full justify-between">
                            <p className="body-medium font-bold text-[#222325]">
                                Kategori
                            </p>
                            <div className="flex size-[24px] items-center justify-center lg:hidden">
                                <MdArrowForwardIos />
                            </div>
                        </button>
                        <div className="body-medium hidden flex-col font-medium text-[#333333AD] lg:flex lg:h-auto lg:max-h-[162px] lg:w-auto lg:max-w-[150px] lg:gap-[13px] lg:text-nowrap">
                            <a href="">Digital & Teknologi</a>
                            <a href="">Pemasaran</a>
                            <a href="">Manajemen Bisnis</a>
                            <a href="">Pengembangan Diri</a>
                            <a href="">Desain</a>
                        </div>
                    </div>
                    <div className="flex flex-col lg:h-auto lg:max-h-[199px] lg:w-auto lg:max-w-[148px] lg:gap-[15px]">
                        <button className="flex items-center justify-between">
                            <p className="body-medium font-bold text-[#222325]">
                                Perusahaan
                            </p>
                            <div className="flex size-[24px] items-center justify-center lg:hidden">
                                <MdArrowForwardIos />
                            </div>
                        </button>
                        <div className="body-medium hidden flex-col font-medium text-[#333333AD] lg:flex lg:h-auto lg:max-h-[162px] lg:w-auto lg:max-w-[150px] lg:gap-[13px] lg:text-nowrap">
                            <a href="">Tentang Kami</a>
                            <a href="">FAQ</a>
                            <a href="">Kebijakan Privasi</a>
                            <a href="">Ketentuan Layanan</a>
                            <a href="">Bantuan</a>
                        </div>
                    </div>
                    <div className="flex flex-col lg:h-auto lg:max-h-[199px] lg:w-auto lg:max-w-[148px] lg:gap-[15px]">
                        <button className="flex w-full justify-between">
                            <p className="body-medium font-bold text-[#222325]">
                                Komunitas
                            </p>
                            <div className="flex size-[24px] items-center justify-center lg:hidden">
                                <MdArrowForwardIos />
                            </div>
                        </button>
                        <div className="body-medium hidden flex-col font-medium text-[#333333AD] lg:flex lg:h-auto lg:max-h-[162px] lg:w-auto lg:max-w-[150px] lg:gap-[13px] lg:text-nowrap">
                            <a href="">Tips Sukses</a>
                            <a href="">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:h-auto lg:max-h-[33px] lg:w-auto lg:max-w-[1200px] lg:border-b-[1px] lg:border-[#3A35411F] lg:pt-[32px]"></div>
            <div className="flex h-auto max-h-[91px] w-full max-w-[360px] flex-col-reverse gap-[12px] lg:max-h-[35px] lg:max-w-[1200px] lg:flex-row lg:items-center lg:justify-between">
                <p className="body-medium font-normal text-[#333333AD]">
                    @2023 Gerobak Sayur All Rights Reserved.
                </p>
                <div className="flex gap-[15px]">
                    <Icons
                        icon={
                            <LinkedinIcon
                                width={20}
                                height={20}
                                fill="#222325"
                                stroke=""
                            />
                        }
                    />
                    <Icons
                        icon={
                            <FacebookIcon
                                width={20}
                                height={20}
                                fill="#222325"
                                stroke=""
                            />
                        }
                    />
                    <Icons icon={<InstagramIcon width={20} height={20} />} />
                    <Icons icon={<TwitterIcon width={20} height={20} />} />
                </div>
            </div>
        </div>
    )
}

export default Footer

function Icons({ icon }: { icon: ReactNode }) {
    return (
        <a
            href=""
            className="flex size-[35px] items-center justify-center rounded-full border-[1.5px] border-[#222325] border-opacity-35"
        >
            {icon}
        </a>
    )
}
