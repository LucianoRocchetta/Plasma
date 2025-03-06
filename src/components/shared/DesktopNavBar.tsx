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
  
   return (<div className="w-full max-w-screen-2xl m-auto p-10">
          <motion.div 
              className={`m-auto p-5 backdrop-blur-lg flex items-center justify-between rounded-full ${
                isSticky ? "fixed top-0 right-0 left-0 z-50 bg-black bg-opacity-80 max-w-screen-md" : ""
              }`}
              style={{ opacity }}
              initial={{ y: 0 }}
              animate={{ y: isSticky ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
  
            <div className="flex items-center space-x-3">
              <Image className="rounded-full" src="/images/Logo.jpeg" alt="logo" width={70} height={70}></Image>
              <h1 className="text-2xl font-bold text-white">Plasmá</h1>
            </div>
            
            <nav>
              <ul className="flex space-x-10">
                {MENU_OPTIONS.map((item, index) => {
                  return <li key={index}>
                  <Link href={item.slug} className="text-white hover:text-gray-200 hover:font-bold">
                    {item.label}
                  </Link>
                </li>
                })}
              </ul>
            </nav>
            <Link href={"#services"}>
              <Button type="outlinePrimary" >Servicios</Button>
            </Link>
            </motion.div>
          </div> )
  }