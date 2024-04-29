import { ReactNode } from "react";
import PaymentCardLayout from "@/components/Layout/PaymentCardLayout";
import SectionTitle from "@/components/Atoms/SectionTitle";
import PaymentMethodRadio from "@/components/Molecules/PaymentMethodRadio";
import PaymentMethodInputGroup from "@/components/Molecules/PaymentMethodInputGroup";
import PaymentCheckbox from "@/components/Molecules/PaymentCheckbox";

interface Props {
  children: ReactNode;
}

function PaymentMethodCard({ children }: Props) {
  return <PaymentCardLayout>{children}</PaymentCardLayout>;
}

PaymentMethodCard.Title = SectionTitle;
PaymentMethodCard.PaymentMethodRadio = PaymentMethodRadio;
PaymentMethodCard.PaymentMethodInputGroup = PaymentMethodInputGroup;
PaymentMethodCard.PaymentCheckbox = PaymentCheckbox;

export default PaymentMethodCard;
