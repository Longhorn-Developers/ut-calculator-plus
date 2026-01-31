import { MouseEventHandler } from "react";

export default function Button({
  text,
  type = "secondary",
  disabled = false,
  onClick,
}: {
  text: string;
  type?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const classes: string[] = [
    "h-10",
    "px-4",
    "font-['Roboto Flex']",
    "rounded-xs",
    "font-medium",
  ];
  if (type === "primary") {
    if (disabled) {
      classes.push("bg-ut-black/50", "text-ut-black");
    } else {
      classes.push(
        "bg-burnt-orange",
        "hover:bg-burnt-orange/80",
        "active:bg-burnt-orange/60",
        "text-white",
      );
    }
  } else {
    classes.push("outline");
    if (disabled) {
      classes.push("text-ut-black/50", "outline-ut-black/50");
    } else {
      classes.push(
        "text-burnt-orange",
        "outline-burnt-orange",
        "hover:bg-gray-100",
        "active:bg-gray-200",
      );
    }
  }
  return (
    <button onClick={onClick} className={classes.join(" ")}>
      {text}
    </button>
  );
}
