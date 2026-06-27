import { LucideIcon } from "lucide-react"
import { Badge } from "./Badge"

interface aboutCardProps {
    children: React.ReactNode
    title: string,
    description: string
}

export const AboutCard = ({children, title, description}: aboutCardProps) => {
    return (
        <div className="p-8 lg:p-10 border border-gray-100 rounded-2xl flex flex-col space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white h-full">
            <div className="w-full lg:w-1/2">
                {children}      
            </div>
            <h2 className="font-semibold text-2xl text-gray-900">{title}</h2>
            <p className="text-gray-500 leading-relaxed flex-1">{description}</p> 
        </div>
    )
}