"use client"

import { MENU_OPTIONS } from "@/assets/constants";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconMenu4, IconX } from "@tabler/icons-react";

export const MobileNavBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isNavActivated, setIsNavActivated] = useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0.9]);

    const handleNav = () => {
      setIsNavActivated((prev) => !prev)
      document.body.style.overflow = isNavActivated ? "auto" : "hidden"
    }
    
    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 100);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className="w-full">
        {!isNavActivated &&
        <motion.div
          className={`p-5 backdrop-blur-lg flex items-center justify-between rounded-full ${
            isSticky ? "fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 rounded-none" : "relative"
          }`}
          style={{ opacity }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
            <div className="flex items-center space-x-3">
                <Image className="rounded-full" src="/images/Logo.jpeg" alt="logo" width={50} height={50}></Image>
                <h1 className="text-2xl font-bold text-white">Plasmá</h1>
            </div>
          <IconMenu4 size={32} color="white" onClick={handleNav} className="cursor-pointer" />
        </motion.div>
        }
  
        <AnimatePresence>
          {isNavActivated && (
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col justify-start"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <motion.div
                className="absolute top-5 right-5"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <IconX size={32} color="white" onClick={handleNav} className="cursor-pointer" />
              </motion.div>
  
              <motion.ul
                className="flex flex-col space-y-10 text-2xl font-medium text-white pt-20 pl-5"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
                }}
              >
                {MENU_OPTIONS.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-gray-300 hover:font-bold ease-out duration-300 cursor-pointer"
                  >
                    <Link href={item.slug} onClick={handleNav}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };