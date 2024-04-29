import { RadioGroupItem } from "@/components/Atoms/radio-group";
import { Label } from "@/components/Atoms/label";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
}

function CustomRadioGroup({ id, children }: Props) {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={id} id={id} />
      <Label htmlFor={id} className="opacity-90">
        {children}
      </Label>
    </div>
  );
}

export default CustomRadioGroup;
