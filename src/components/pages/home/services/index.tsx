"use client"

import { SectionHeader } from "@/components/shared"
import { IMAGE_DATA } from "@/assets/constants"
import { ServiceCard } from "@/components/ui"
import { motion } from "framer-motion"

interface servicesGridProps {
  gridData: {
    imageURL: string,
    title: string,
    description: string,
  }[]
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
}

const ServicesGrid = ( { gridData }: servicesGridProps) => {
  return (
      <motion.div 
        className="grid grid-cols-2 h-[400px] md:grid-cols-2 gap-4 mt-8 md:h-[600px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="grid grid-rows-2 gap-4 h-full" variants={itemVariants}>
          {gridData.slice(0,2).map((data, key) => {
            return <ServiceCard key={key} {...data}></ServiceCard>
          })}
        </motion.div>

        <motion.div className="relative w-full h-full" variants={itemVariants}>
          <ServiceCard {...gridData[2]}></ServiceCard>
        </motion.div>
        </motion.div>
  ) 
}

const Services = () => {
    return (
    <section className="max-w-7xl m-auto px-10 py-16 lg:py-24" id="services">
        <SectionHeader title="Campos de aplicación" badge="Servicios"/>

        <ServicesGrid gridData={IMAGE_DATA}/>
    </section>
    )
}

export { Services }