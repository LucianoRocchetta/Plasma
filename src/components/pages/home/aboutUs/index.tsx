"use client"

import { Badge, AboutCard  } from "@/components/ui"
import { Calendar, Signature, User } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
}

const AboutUs = () => {
    return (
        <section className="bg-gray-50/50 py-16 lg:py-24" id="aboutUs">
            <motion.div 
                className="grid grid-cols-1 px-10 gap-8 lg:grid-cols-3 max-w-7xl m-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={cardVariants}>
                    <AboutCard title="Sobre nosotros" description="Nos especializamos en la obtención y procesamiento de PRP (plasma rico en plaquetas) para aplicaciones en medicina general, odontología, estética y cirugía plástica.">
                        <Badge label="Especialidad" type="secondary" icon={Signature}/> 
                    </AboutCard>
                </motion.div>

                <motion.div variants={cardVariants}>
                    <AboutCard title="Modus operandi" description="Ofrecemos un servicio a domicilio, acudiendo al consultorio del profesional para realizar la extracción de sangre y la preparación del PRP o PRF, utilizando materiales descartables y equipos estériles.">
                        <Badge label="Modalidad" type="secondary" icon={User}/>  
                    </AboutCard>
                </motion.div>

                <motion.div variants={cardVariants}>
                    <AboutCard title="Nuestro personal" description="Las regulaciones vigentes permiten al tecnico en hemoterapia realizar la extracción y preparación del hemocomponente (PRP) para ser utilizado por el profesional.">
                        <Badge label="Normativa" type="secondary" icon={Calendar}/>  
                    </AboutCard>
                </motion.div>
            </motion.div>
        </section>
    )
}

export { AboutUs }