import { cn } from "@/utils/cn";
import Link from "next/link";
import { ButtonProps } from "./types";
import { ArrowRight } from "@/components/Icons";
import { styles } from "./styles";

export const Button = ({
  appearance = "solid",
  size = "md",
  color = "blue",
  href,
  text,
  subText,
  fluid = false,
  newTab = false,
  startIcon,
  endIcon,
  className,
  onClick,
}: ButtonProps) => {
  const baseClasses = cn(
    styles.base,
    styles.appearance[appearance][color],
    styles.size[size],
    fluid && "w-full",
    className
  );

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "arrow-right":
        return <ArrowRight width={24} height={24} />;
      default:
        return null;
    }
  };

  const content = (
    <>
      {startIcon && renderIcon(startIcon)}
      <span className="flex flex-col items-start">
        <span>{text}</span>
        {subText && <span className="text-sm opacity-80">{subText}</span>}
      </span>
      {endIcon && renderIcon(endIcon)}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
};
