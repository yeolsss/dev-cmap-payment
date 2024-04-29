import { ReactNode } from "react";
import OrderInfoCard from "@/components/Organisms/OrderInfoCard";
import OrderUserCard from "@/components/Organisms/OrderUserCard";
import OrderShippingCard from "@/components/Organisms/OrderShippingCard";
import CouponsCard from "@/components/Organisms/CouponsCard";
import FinalPaymentCard from "@/components/Organisms/FinalPaymentCard";
import PaymentMethodCard from "@/components/Molecules/PaymentMethodCard";
import AgreeCard from "@/components/Molecules/AgreeCard";

interface Props {
  children: ReactNode;
  flex?: string;
}

function Payment({ flex = "flex-0", children }: Props) {
  const style = `mt-16 bg-gray-100 flex flex-col gap-5 ${flex}`;
  return <div className={style}>{children}</div>;
}

Payment.OrderInfoCard = OrderInfoCard;
Payment.OrderUserCard = OrderUserCard;
Payment.OrderShippingCard = OrderShippingCard;
Payment.CouponsCard = CouponsCard;
Payment.FinalPaymentCard = FinalPaymentCard;
Payment.PaymentMethodCard = PaymentMethodCard;
Payment.AgreeCard = AgreeCard;

export default Payment;
