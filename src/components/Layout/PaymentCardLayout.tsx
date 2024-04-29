import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

function PaymentCardLayout({ children, className }: Props) {
  const style = cn("flex flex-col gap-5 bg-white p-5 rounded-sm", className);
  return <section className={style}>{children}</section>;
}

export default PaymentCardLayout;
