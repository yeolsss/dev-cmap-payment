import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Atoms/select";
import { Input } from "@/components/Atoms/input";
import DetailInfoText from "@/components/Atoms/DetailInfoText";

function PaymentMethodInputGroup() {
  return (
    <div className="flex flex-col gap-3">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="00은행: 0000-00-0000 예금주명" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="wori">우리은행: 1002-000-0000 김김김</SelectItem>
          <SelectItem value="kb">국민은행: 5555-000-0000 김김김</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="입금자명 (미입력시 주문자명)" />
      <DetailInfoText>
        주문 후 n시간 동안 미입금시 자동 취소됩니다.
      </DetailInfoText>
    </div>
  );
}

export default PaymentMethodInputGroup;
