"use client"

import { MENU_OPTIONS } from "@/assets/constants";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui";

export const DesktopNavBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0.9]);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [])
  
   return (<div className="w-3/4 m-auto px-10 py-8">
          <motion.div 
               className={`mx-auto py-2.5 px-6 backdrop-blur-xl bg-white/80 flex items-center justify-between rounded-full border border-white/30 ${
                isSticky ? "fixed top-5 left-0 right-0 z-50 bg-white/80 max-w-5xl shadow-lg shadow-black/10" : ""
              }`}
              style={{ opacity }}
              initial={{ y: 0 }}
              animate={{ y: isSticky ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
  
            <div className="flex items-center space-x-3">
              <Image className="rounded-full ring-2 ring-white/40" src="/images/Logo.jpg" alt="logo" width={56} height={56}></Image>
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Plasmá</h1>
            </div>
            
            <nav>
              <ul className="flex items-center space-x-8">
                {MENU_OPTIONS.map((item, index) => {
                  return <li key={index}>
                  <Link href={item.slug} className="text-gray-600 hover:text-gray-900 text-base font-medium transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
                })}
              </ul>
            </nav>
            <Link href={"#services"}>
              <Button type="outlineSecondary" >Servicios</Button>
            </Link>
            </motion.div>
          </div> )
  }