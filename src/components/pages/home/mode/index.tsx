import { SectionHeader } from "@/components/shared"
import { Badge, Button, ModeCard } from "@/components/ui"
import { MODE_INFO } from "@/assets/constants"

const Mode = () => {
    return (
    <section className="max-w-screen-2xl m-auto p-10 mt-10" id="mode">
        <SectionHeader title="Operá con eficiencia" badge="Modalidad"/>

        <div className="space-y-10">
               <ModeCard 
                    description={MODE_INFO[0].description} 
                    imageURL={MODE_INFO[0].imageURL}
                    title={MODE_INFO[0].title}
                ><Badge label="Reserva" type="secondary"/></ModeCard>
                <ModeCard 
                    description={MODE_INFO[1].description} 
                    imageURL={MODE_INFO[1].imageURL}
                    title={MODE_INFO[1].title}
                    mirrored={true}
                ><Badge label="Preparación" type="secondary"/></ModeCard>
                <ModeCard 
                    description={MODE_INFO[2].description} 
                    imageURL={MODE_INFO[2].imageURL}
                    title={MODE_INFO[2].title}
                ><Badge label="Aplicación" type="secondary"/></ModeCard>
        </div>

        <div className="w-full p-5 mt-20 bg-gray-100 rounded-full flex items-center justify-end ">
            <Button type="secondary">Reservar cita</Button>
        </div>
    </section>
    )
}

export { Mode }