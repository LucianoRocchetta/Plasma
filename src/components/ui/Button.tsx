interface ButtonProps {
  type: "primary" | "secondary" | "outlinePrimary" | "outlineSecondary";
  children: React.ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  const baseStyles =
    "rounded-full font-semibold items-center justify-center py-2 px-3 transition-all lg:py-3 lg:px-6";

  const typeStyles = {
    primary: "bg-gray-50 text-black",
    secondary: "bg-stone-800 text-white",
    outlinePrimary: "border border-gray-50 text-white",
    outlineSecondary: "border border-stone-800 text-black",
  };

  const animationStyles = "transform hover:scale-105 hover:shadow-lg";

  const combinedStyles = `${baseStyles} ${typeStyles[type]} ${animationStyles}`;

  return <button className={combinedStyles}>{children}</button>;
};

export { Button };

  