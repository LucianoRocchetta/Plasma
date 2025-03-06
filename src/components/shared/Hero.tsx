"use client"

import Image from "next/image";
import { Button } from "../ui";
import { useEffect, useState } from "react";
import { DesktopNavBar} from "./DesktopNavBar";
import { MobileNavBar } from "./MobileNavBar";
import Link from "next/link";

export default function Hero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const handleNavType = () => {
    setIsMobile(window.innerWidth <= 950);
  };

  useEffect(() => {
    handleNavType();
    window.addEventListener("resize", handleNavType);
    return () => window.removeEventListener("resize", handleNavType);
  }, []);

  return (
    <header className="relative w-[95%] mt-2 lg:w-[98%] m-auto lg:mt-5 h-[800px] rounded-xl" id="header">
      <Image
        src={
          "https://images.unsplash.com/photo-1736325680518-397f54bd1086?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="prp-image"
        fill
        className="object-cover rounded-xl"
      />

      <div className="absolute inset-0 p-10 flex flex-col items-center justify-between bg-black bg-opacity-50 rounded-xl">
        {
          isMobile != null ? (isMobile ? <MobileNavBar/>  : <DesktopNavBar/>) : null
        }
        

        <div className="flex-1 flex flex-col items-start justify-end w-full mx-auto space-y-5 mb-20 max-w-screen-2xl m-auto lg:p-10 lg:space-y-10">
          <h2 className="text-4xl lg:text-6xl text-white max-w-[1024px] ">
            El servicio medico on demand que tu consultorio necesita
          </h2>
          <div className="flex gap-3">
            <Button type="primary">Reservar turno</Button>
            <Link href={"#contact"} >
              <Button type="outlinePrimary" >Contactanos</Button>
            </Link>
        </div>
        </div>
        </div>
    </header>
  );
}