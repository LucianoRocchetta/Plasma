import { SectionHeader } from "@/components/shared"
import { IMAGE_DATA } from "@/assets/constants"
import { ServiceCard } from "@/components/ui"

interface servicesGridProps {
  gridData: {
    imageURL: string,
    title: string,
    description: string,
  }[]
}

const ServicesGrid = ( { gridData }: servicesGridProps) => {
  return (
      <div className="grid grid-cols-2 h-[400px] md:grid-cols-2 gap-4 mt-8 md:h-[600px]">
        <div className="grid grid-rows-2 gap-4 h-full">
          {gridData.slice(0,2).map((data, key) => {
            return <ServiceCard key={key} {...data}></ServiceCard>
          })}
        </div>

        <div className="relative w-full h-full">
          <ServiceCard {...gridData[2]}></ServiceCard>
        </div>
        </div>
  ) 
}

const Services = () => {
    return (
    <section className="max-w-screen-2xl m-auto p-10 my-10" id="services">
        <SectionHeader title="Campos de aplicación" badge="Servicios"/>

        <ServicesGrid gridData={IMAGE_DATA}/>
    </section>
    )
}

export { Services }