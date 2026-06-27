import { SectionHeader } from "@/components/shared"
import { Badge, Button, ModeCard } from "@/components/ui"
import { MODE_INFO } from "@/assets/constants"

const Mode = () => {
    return (
    <section className="bg-gray-50/50 py-16 lg:py-24" id="mode">
        <div className="max-w-7xl m-auto px-10">
        <SectionHeader title="Operá con eficiencia" badge="Modalidad"/>

        <div className="space-y-16 lg:space-y-24">
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

        <div className="w-full p-5 mt-16 lg:mt-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-end">
            <Button type="secondary">Reservar cita</Button>
        </div>
        </div>
    </section>
    )
}

export { Mode }