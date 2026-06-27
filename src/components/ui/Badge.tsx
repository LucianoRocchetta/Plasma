import { LucideIcon } from 'lucide-react';
import { FC } from 'react';

interface BadgeProps {
  label: string;
  icon?: LucideIcon;
  type: "primary" | "secondary" | "outlinePrimary" | "outlineSecondary"
}

export const Badge: FC<BadgeProps> = ({ label, icon: Icon, type }) => {

  const baseStyles = {
    primary: "bg-zinc-900 text-gray-100",
    secondary: "bg-blue-200 text-blue-800",
    outlinePrimary: "border border-zinc-900 text-zinc-900",
    outlineSecondary: "border border-blue-800 text-blue-800"
  }

  return (
    <div className={`${baseStyles[type]} rounded-full py-1.5 px-3.5 flex items-center justify-center space-x-1.5 text-sm font-medium`}>
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </div>
  );
};
