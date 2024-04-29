import PaymentCardLayout from "@/components/Layout/PaymentCardLayout";
import { ReactNode } from "react";
import SectionTitle from "@/components/Atoms/SectionTitle";
import OrderShippingDetail from "@/components/Molecules/OrderShippingDetail";
import ShippingMemo from "@/components/Molecules/ShippingMemo";

interface Props {
  children: ReactNode;
}

function OrderShippingCard({ children }: Props) {
  return <PaymentCardLayout>{children}</PaymentCardLayout>;
}

OrderShippingCard.Title = SectionTitle;
OrderShippingCard.OrderShippingDetail = OrderShippingDetail;
OrderShippingCard.ShippngMemo = ShippingMemo;

export default OrderShippingCard;
