import { RadioGroup } from "@/components/Atoms/radio-group";
import CustomRadioGroup from "@/components/Molecules/CustomRadioGroup";

function PaymentMethodRadio() {
  return (
    <RadioGroup className="grid grid-cols-2 gap-5" defaultValue="option-one">
      <CustomRadioGroup id={"option-one"}>신용카드</CustomRadioGroup>
      <CustomRadioGroup id={"option-two"}>가상계좌</CustomRadioGroup>
      <CustomRadioGroup id={"option-tree"}>무통장 입금</CustomRadioGroup>
      <CustomRadioGroup id={"option-fore"}>핸드폰 결제</CustomRadioGroup>
      <CustomRadioGroup id={"option-five"}>카카오페이</CustomRadioGroup>
    </RadioGroup>
  );
}

export default PaymentMethodRadio;
