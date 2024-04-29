import { ReactNode } from "react";
import OrderInfoDetail from "@/components/Molecules/OrderInfoDetail";
import SectionTitle from "@/components/Atoms/SectionTitle";
import PaymentCardLayout from "@/components/Layout/PaymentCardLayout";

interface Props {
  children: ReactNode;
}

function OrderInfoCard({ children }: Props) {
  return <PaymentCardLayout>{children}</PaymentCardLayout>;
}

OrderInfoCard.Title = SectionTitle;
OrderInfoCard.OrderInfoDetail = OrderInfoDetail;

export default OrderInfoCard;
