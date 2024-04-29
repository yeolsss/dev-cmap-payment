"use client";

import DetailNameTitle from "@/components/Atoms/DetailNameTitle";
import { FormControl, FormItem, FormLabel } from "@/components/Atoms/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Atoms/select";

function ShippingMemo() {
  return (
    <FormItem>
      <FormLabel>배송 메모</FormLabel>
      <Select>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={"배송 메모를 선택해주세요"} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="1">배송 전 연락주세요.</SelectItem>
          <SelectItem value="2">문 앞에 두세요.</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
  );
}

ShippingMemo.Title = DetailNameTitle;

export default ShippingMemo;
