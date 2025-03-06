import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { IconBrandLinkedin, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="h-max bg-stone-800">
            <section className="max-w-screen-2xl m-auto p-10">
            <div className="flex items-start justify-between border-b-2 pb-5 border-gray-300">
                <div className="flex flex-col space-y-5">
                    <div className="flex items-center space-x-3">
                        <Image className="rounded-full" src="/images/Logo.jpeg" alt="logo" width={70} height={70}></Image>
                        <h1 className="text-2xl font-bold text-white">Plasmá</h1>
                    </div>
                    <div className="flex flex-row space-x-3">
                    <Link href="https://www.instagram.com/plasma.arg/">
                    <div className="bg-slate-100 p-2 rounded-full flex items-center justify-center 
                                hover:bg-stone-800 hover:text-white 
                                hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer lg:p-3">
                        <IconBrandInstagram></IconBrandInstagram>
                    </div>
                    </Link>
                    {/*<div className="bg-slate-100 p-2 rounded-full flex items-center justify-center 
                                hover:bg-stone-800 hover:text-white 
                                hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer lg:p-3">
                        <IconBrandLinkedin></IconBrandLinkedin>
                    </div>*/}
                    <div className="bg-slate-100 p-2 rounded-full flex items-center justify-center 
                                hover:bg-stone-800 hover:text-white 
                                hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer lg:p-3">
                        <IconBrandWhatsapp></IconBrandWhatsapp>
                    </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-gray-300 font-bold text-2xl mb-5">Compañia</h2>
                    <ul className="flex flex-col space-y-2 text-gray-300">
                        <Link href={"#header"}>Inicio</Link>
                        <Link href={"#aboutUs"}>Acerca de nosotros</Link>
                        <Link href={"#services"}>Servicios</Link>
                        <Link href={"#mode"}>Modo</Link>
                        <Link href={"#faq"}>FAQ</Link>
                        <Link href={"#contact"}>Contacto</Link>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center pt-10">
                <h2 className="text-gray-300 font-thin">Plasmá todos los derechos reservados @2025</h2>
                <Link 
                    href="#header" 
                    className="bg-slate-100 p-3 rounded-full flex items-center justify-center 
                                hover:bg-stone-800 hover:text-white 
                                hover:scale-105 transform transition-all duration-300 ease-in-out"
                    >
                    <ChevronUp />
                </Link>
            </div>
            </section>
        </footer>
    )
}