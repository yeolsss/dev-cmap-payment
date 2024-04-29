import { ReactNode } from "react";
import OrderInfoDetail from "@/components/Molecules/OrderInfoDetail";
import SectionTitle from "@/components/Atoms/SectionTitle";

interface Props {
  children: ReactNode;
}

function OrderInfoCard({ children }: Props) {
  return (
    <section className="flex flex-col gap-5 bg-white p-5">{children}</section>
  );
}

OrderInfoCard.Title = SectionTitle;
OrderInfoCard.OrderInfoDetail = OrderInfoDetail;

export default OrderInfoCard;
