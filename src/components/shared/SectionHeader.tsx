import { LucideIcon } from "lucide-react"
import { Badge } from "../ui"

interface sectionHeaderProps {
    title: string,
    badge: string,
    icon?: LucideIcon
}

const SectionHeader = ({title, badge, icon}: sectionHeaderProps) => {
    return (
        <div className="flex items-center justify-between mb-12 lg:mb-16">
            <div className="flex items-center gap-3">
                <Badge label={badge} type="outlinePrimary" icon={icon}/>
                <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 tracking-tight">{title}</h2>
            </div>
        </div>
    )
}

export { SectionHeader }