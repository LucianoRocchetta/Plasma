import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"
import Link from "next/link"

const SocialMediaSideBar = () => {
    return (
        <div className="hidden lg:block fixed z-10 top-1/2 right-0 pr-10 space-y-3 -translate-y-1/2">
            <Link href="https://www.instagram.com/plasma.arg/">
            <div className="bg-slate-100 p-3 rounded-full flex items-center justify-center 
                                hover:bg-stone-800 hover:text-white 
                                hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
                <IconBrandInstagram></IconBrandInstagram>
            </div>
            </Link>
            {/*<div className="bg-slate-100 p-3 rounded-full flex items-center justify-center 
                                hover:bg-stone-800 hover:text-white 
                                hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
                <IconBrandLinkedin></IconBrandLinkedin>
            </div>*/}
            <div className="bg-slate-100 p-3 rounded-full flex items-center justify-center 
                                hover:bg-stone-800 hover:text-white 
                                hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
                <IconBrandWhatsapp></IconBrandWhatsapp>
            </div>
        </div>
    )
}

export { SocialMediaSideBar }