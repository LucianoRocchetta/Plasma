interface ButtonProps {
  type: "primary" | "secondary" | "outlinePrimary" | "outlineSecondary";
  children: React.ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  const baseStyles =
    "rounded-full font-medium items-center justify-center py-2 px-3 transition-all duration-200 lg:py-3 lg:px-6";

  const typeStyles = {
    primary: "bg-gray-50 text-black shadow-md shadow-black/10",
    secondary: "bg-stone-800 text-white shadow-md shadow-black/20",
    outlinePrimary: "border border-white/30 text-white hover:bg-white/10",
    outlineSecondary: "border border-stone-800/30 text-black hover:bg-stone-800/5",
  };

  const animationStyles = "transform hover:scale-105 hover:shadow-xl";

  const combinedStyles = `${baseStyles} ${typeStyles[type]} ${animationStyles}`;

  return <button className={combinedStyles}>{children}</button>;
};

export { Button };

  