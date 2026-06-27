import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"
import Link from "next/link"

const SocialMediaSideBar = () => {
    return (
        <div className="hidden lg:block fixed z-10 top-1/2 right-0 pr-10 space-y-4 -translate-y-1/2">
            <Link href="https://www.instagram.com/plasma.arg/">
            <div className="bg-white p-3.5 rounded-full flex items-center justify-center 
                                shadow-lg shadow-black/10
                                hover:bg-stone-800 hover:text-white 
                                hover:scale-110 transform transition-all duration-300 ease-in-out cursor-pointer">
                <IconBrandInstagram size={22}></IconBrandInstagram>
            </div>
            </Link>
            <div className="bg-white p-3.5 rounded-full flex items-center justify-center 
                                shadow-lg shadow-black/10
                                hover:bg-stone-800 hover:text-white 
                                hover:scale-110 transform transition-all duration-300 ease-in-out cursor-pointer">
                <IconBrandWhatsapp size={22}></IconBrandWhatsapp>
            </div>
        </div>
    )
}

export { SocialMediaSideBar }