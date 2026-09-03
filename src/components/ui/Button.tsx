import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
  className?: string;
  download?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon = false,
  className = "",
  download = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200";
  const variants = {
    primary: "bg-accent text-bg hover:bg-accent/90",
    secondary: "border border-line text-ink-primary hover:border-accent/50 hover:bg-surface",
    ghost: "text-ink-primary hover:text-accent",
  };

  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} download={download || undefined} className={`group ${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`group ${base} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
