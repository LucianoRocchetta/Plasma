import { LucideIcon } from "lucide-react"
import { Badge } from "../ui"

interface sectionHeaderProps {
    title: string,
    badge: string,
    icon?: LucideIcon
}

const SectionHeader = ({title, badge, icon}: sectionHeaderProps) => {
    return (
        <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
                <Badge label={badge} type="outlinePrimary" icon={icon}/>
                <h2 className="text-xl lg:text-5xl">{title}</h2>
            </div>
        </div>
    )
}

export { SectionHeader }