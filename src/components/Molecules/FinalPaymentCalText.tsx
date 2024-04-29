import DetailInfoText from "@/components/Atoms/DetailInfoText";
import DetailNameTitle from "@/components/Atoms/DetailNameTitle";

interface Props {
  title: string;
  payment: string;
}

function FinalPaymentCalText({ title, payment }: Props) {
  return (
    <div className="flex justify-between items-center">
      <DetailInfoText>{title}</DetailInfoText>
      <DetailNameTitle>{payment}원</DetailNameTitle>
    </div>
  );
}

export default FinalPaymentCalText;
