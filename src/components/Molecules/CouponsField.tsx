import { Button } from "@/components/Atoms/button";
import { ReactNode } from "react";
import CouponsInput from "@/components/Molecules/CouponsInput";

interface Props {
  children: ReactNode;
}

function CouponsField({ children }: Props) {
  return <div className="flex gap-5 items-end">{children}</div>;
}

CouponsField.InputField = CouponsInput;
CouponsField.Button = Button;

export default CouponsField;
