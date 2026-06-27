import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { IconBrandLinkedin, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="h-max bg-gradient-to-b from-stone-800 to-stone-900">
            <section className="max-w-7xl m-auto px-10 py-16">
            <div className="flex flex-col lg:flex-row items-start justify-between border-b border-white/10 pb-10 gap-10">
                <div className="flex flex-col space-y-6">
                    <div className="flex items-center space-x-4">
                        <Image className="rounded-full ring-2 ring-white/20" src="/images/Logo.jpeg" alt="logo" width={64} height={64}></Image>
                        <h1 className="text-2xl font-semibold text-white tracking-tight">Plasmá</h1>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                        Servicio médico on-demand de PRP para profesionales y empresas.
                    </p>
                    <div className="flex flex-row space-x-3">
                    <Link href="https://www.instagram.com/plasma.arg/">
                    <div className="bg-white/10 p-3 rounded-full flex items-center justify-center 
                                text-white hover:bg-white hover:text-stone-900 
                                hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
                        <IconBrandInstagram size={20}></IconBrandInstagram>
                    </div>
                    </Link>
                    <div className="bg-white/10 p-3 rounded-full flex items-center justify-center 
                                text-white hover:bg-white hover:text-stone-900 
                                hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer">
                        <IconBrandWhatsapp size={20}></IconBrandWhatsapp>
                    </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-gray-300 font-semibold text-lg mb-5">Compañia</h2>
                    <ul className="flex flex-col space-y-3 text-gray-400">
                        <Link href={"#header"} className="hover:text-white transition-colors duration-200">Inicio</Link>
                        <Link href={"#aboutUs"} className="hover:text-white transition-colors duration-200">Acerca de nosotros</Link>
                        <Link href={"#services"} className="hover:text-white transition-colors duration-200">Servicios</Link>
                        <Link href={"#mode"} className="hover:text-white transition-colors duration-200">Modo</Link>
                        <Link href={"#faq"} className="hover:text-white transition-colors duration-200">FAQ</Link>
                        <Link href={"#contact"} className="hover:text-white transition-colors duration-200">Contacto</Link>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center pt-8 gap-4">
                <p className="text-gray-500 text-sm">Plasmá — Todos los derechos reservados © 2025</p>
                <Link 
                    href="#header" 
                    className="bg-white/10 p-3 rounded-full flex items-center justify-center 
                                text-white hover:bg-white hover:text-stone-900 
                                hover:scale-105 transform transition-all duration-300 ease-in-out"
                    >
                    <ChevronUp size={20} />
                </Link>
            </div>
            </section>
        </footer>
    )
}