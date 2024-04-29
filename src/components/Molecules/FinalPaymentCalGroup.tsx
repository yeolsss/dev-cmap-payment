import FinalPaymentCalText from "@/components/Molecules/FinalPaymentCalText";

function FinalPaymentCalGroup() {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <FinalPaymentCalText title={"상품가격"} payment={"18,000"} />
      <FinalPaymentCalText title={"쿠폰 할인"} payment={"-1,000"} />
      <FinalPaymentCalText title={"포인트 사용"} payment={"-0"} />
      <FinalPaymentCalText title={"배송비"} payment={"+2,500"} />
    </div>
  );
}

export default FinalPaymentCalGroup;
