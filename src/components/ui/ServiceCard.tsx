import Image from "next/image"

interface serviceCardProps {
    imageURL: string,
    title: string,
    description: string
}

export const ServiceCard = ({imageURL, title, description}: serviceCardProps) => {
    return (
    <div className="relative h-full group overflow-hidden rounded-xl shadow-lg">
        <Image
            src={imageURL}
            alt="Placeholder"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg md:text-2xl font-bold mb-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                {title}
            </h3>
            <p className="hidden md:block text-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700">
                {description}
            </p>
        </div>
    </div>
    )
}