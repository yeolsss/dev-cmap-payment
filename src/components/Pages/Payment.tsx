import { ReactNode } from "react";
import OrderInfoCard from "@/components/Organisms/OrderInfoCard";

interface Props {
  children: ReactNode;
}

function Payment({ children }: Props) {
  return <div className="mt-16">{children}</div>;
}

Payment.OrderInfoCard = OrderInfoCard;

export default Payment;
