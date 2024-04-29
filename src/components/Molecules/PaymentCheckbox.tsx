import { Checkbox } from "@/components/ui/checkbox";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
}

function PaymentCheckbox({ id, children }: Props) {
  return (
    <div className="flex items-center space-x-2 opacity-70">
      <Checkbox id={id} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
}

export default PaymentCheckbox;
