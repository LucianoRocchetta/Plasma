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
    outlinePrimary: "border border-zinc-900 border-zinc-900",
    outlineSecondary: "border border-blue-800 text-blue-800"
  }

  return (
    <div className={`${baseStyles[type]} rounded-full py-2 px-4 flex items-center justify-center space-x-2`}>
      {Icon && <Icon size={20} />}
      <h2>{label}</h2>
    </div>
  );
};
