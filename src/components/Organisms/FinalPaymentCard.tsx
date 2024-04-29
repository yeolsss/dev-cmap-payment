import { ReactNode } from "react";
import PaymentCardLayout from "@/components/Layout/PaymentCardLayout";
import SectionTitle from "@/components/Atoms/SectionTitle";
import FinalPaymentCalGroup from "@/components/Molecules/FinalPaymentCalGroup";
import FinalTotalPayment from "@/components/Molecules/FinalTotalPayment";
import PointSaveText from "@/components/Molecules/PointSaveText";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

function FinalPaymentCard({ children, className }: Props) {
  const style = cn("gap-3 relative", className);
  return <PaymentCardLayout className={style}>{children}</PaymentCardLayout>;
}

FinalPaymentCard.Title = SectionTitle;
FinalPaymentCard.FinalPaymentCalGroup = FinalPaymentCalGroup;
FinalPaymentCard.FinalTotalPayment = FinalTotalPayment;
FinalPaymentCard.PointSaveText = PointSaveText;

export default FinalPaymentCard;
