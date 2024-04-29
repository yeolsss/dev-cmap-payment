import PaymentCardLayout from "@/components/Layout/PaymentCardLayout";
import { ReactNode } from "react";
import SectionTitle from "@/components/Atoms/SectionTitle";
import CouponsField from "@/components/Molecules/CouponsField";
import CouponsPoint from "@/components/Molecules/CouponsPoint";

interface Props {
  children: ReactNode;
}

function CouponsCard({ children }: Props) {
  return <PaymentCardLayout>{children}</PaymentCardLayout>;
}

CouponsCard.Title = SectionTitle;
CouponsCard.CouponsField = CouponsField;
CouponsCard.CouponsPoint = CouponsPoint;

export default CouponsCard;
