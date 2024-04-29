import { ReactNode } from "react";
import PaymentCardLayout from "@/components/Layout/PaymentCardLayout";
import SectionTitle from "@/components/Atoms/SectionTitle";
import OrderUserDetail from "@/components/Molecules/OrderUserDetail";

interface Props {
  children: ReactNode;
}

function OrderUserCard({ children }: Props) {
  return <PaymentCardLayout>{children}</PaymentCardLayout>;
}

OrderUserCard.Title = SectionTitle;
OrderUserCard.OrderUserDetail = OrderUserDetail;

export default OrderUserCard;
