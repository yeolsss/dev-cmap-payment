import { ReactNode } from "react";
import DetailNameTitle from "@/components/Atoms/DetailNameTitle";
import AccentText from "@/components/Atoms/AccentText";

interface Props {
  children: ReactNode;
}

function FinalTotalPayment({ children }: Props) {
  return (
    <div className="flex justify-between items-center mt-3">
      <DetailNameTitle>총 결제금액</DetailNameTitle>
      <AccentText>{children}</AccentText>
    </div>
  );
}

export default FinalTotalPayment;
