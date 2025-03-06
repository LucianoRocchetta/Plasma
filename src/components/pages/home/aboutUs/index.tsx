import { Badge, AboutCard  } from "@/components/ui"
import { Calendar, Signature, User } from "lucide-react"

const AboutUs = () => {
    return (
        <section className="grid grid-cols-1 p-10 gap-10 lg:grid-cols-3 max-w-screen-2xl m-auto my-10" id="aboutUs">
            <AboutCard title="Sobre nosotros" description="Nos especializamos en la obtención y procesamiento de PRP (plasma rico en plaquetas) para aplicaciones en medicina general, odontología, estética y cirugía plástica.">
                <Badge label="Especialidad" type="secondary" icon={Signature}/> 
            </AboutCard>

            <AboutCard title="Modus operandi" description="Ofrecemos un servicio a domicilio, acudiendo al consultorio del profesional para realizar la extracción de sangre y la preparación del PRP o PRF, utilizando materiales descartables y equipos estériles.">
                <Badge label="Modalidad" type="secondary" icon={User}/>  
            </AboutCard>

            <AboutCard title="Nuestro personal" description="Las regulaciones vigentes permiten al tecnico en hemoterapia realizar la extracción y preparación del hemocomponente (PRP) para ser utilizado por el profesional.">
                <Badge label="Normativa" type="secondary" icon={Calendar}/>  
            </AboutCard>
        </section>
    )
}

export { AboutUs }