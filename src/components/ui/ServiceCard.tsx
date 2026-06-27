import Image from "next/image"

interface serviceCardProps {
    imageURL: string,
    title: string,
    description: string
}

export const ServiceCard = ({imageURL, title, description}: serviceCardProps) => {
    return (
    <div className="relative h-full group overflow-hidden rounded-2xl shadow-lg">
        <Image
            src={imageURL}
            alt="Placeholder"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

        <div className="absolute inset-0 flex flex-col justify-end items-start p-6 lg:p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <h3 className="text-lg md:text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {title}
            </h3>
            <p className="hidden md:block text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {description}
            </p>
        </div>
    </div>
    )
}