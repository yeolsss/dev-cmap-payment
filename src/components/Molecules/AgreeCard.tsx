import { ReactNode } from "react";
import PaymentCardLayout from "@/components/Layout/PaymentCardLayout";
import AgreeCheckGroup from "@/components/Molecules/AgreeCheckGroup";
import { Button } from "@/components/Atoms/button";

interface Props {
  children: ReactNode;
  className: string;
}

function AgreeCard({ children, className }: Props) {
  return (
    <PaymentCardLayout className={className}>{children}</PaymentCardLayout>
  );
}

AgreeCard.AgreeCheckGroup = AgreeCheckGroup;
AgreeCard.SubmitButton = Button;

export default AgreeCard;
