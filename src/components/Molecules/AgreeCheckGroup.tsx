import PaymentCheckbox from "@/components/Molecules/PaymentCheckbox";

function AgreeCheckGroup() {
  return (
    <div className="flex flex-col gap-3">
      <PaymentCheckbox id={"allAgree"}>전체 동의</PaymentCheckbox>
      <div className="flex gap-3">
        <span className="opacity-50">ㄴ</span>
        <PaymentCheckbox id={"buyAgree"}>
          구매조건 확인 및 결제진행에 동의
        </PaymentCheckbox>
      </div>
    </div>
  );
}

export default AgreeCheckGroup;
