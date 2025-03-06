import { LucideIcon } from "lucide-react"
import { Badge } from "./Badge"

interface aboutCardProps {
    children: React.ReactNode
    title: string,
    description: string
}

export const AboutCard = ({children, title, description}: aboutCardProps) => {
    return (
        <div className="p-10 border rounded-xl flex flex-col space-y-5">
            <div className="w-full lg:w-1/2">
                {children}      
            </div>
            <h2 className="font-semibold text-2xl ">{title}</h2>
            <p className="text-gray-500">{description}</p> 
        </div>
    )
}