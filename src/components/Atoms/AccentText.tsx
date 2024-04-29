import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

function AccentText({ children, className }: Props) {
  const style = cn("text-[#1a6dff] font-bold", className);
  return <span className={style}>{children}</span>;
}

export default AccentText;
