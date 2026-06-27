"use client"

import Image from "next/image"
import { motion } from 'framer-motion'

interface modeCardProps {
    imageURL: string,
    title: string,
    description: string,
    mirrored?: boolean
    children: React.ReactNode
}

export const ModeCard = ({ imageURL, title, description, mirrored, children }: modeCardProps) => {
    return (
        <motion.div 
            className={`flex flex-col md:flex-row ${mirrored ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:h-[300px] lg:h-[450px]`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                type: 'spring',
                stiffness: 150, 
                damping: 20, 
                mass: 1,         
                duration: 0.8,
            }}
        >

            <div className="relative w-full md:w-1/2 h-[250px] md:h-full rounded-2xl overflow-hidden shadow-lg">
                <Image alt={title} src={imageURL} fill className="object-cover" />
            </div>

            <div className="w-full md:w-1/2 flex flex-col h-full items-start justify-center space-y-5">
                {children}
                <h2 className="font-thin text-3xl">{title}</h2>
                <p>{description}</p>
            </div>
        </motion.div>
    )
}
