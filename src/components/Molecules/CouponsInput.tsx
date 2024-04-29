import { Input } from "@/components/Atoms/input";
import { ComponentProps } from "react";
import CloseButton from "@/components/Atoms/CloseButton";
import { Label } from "@/components/Atoms/label";

interface Props extends ComponentProps<typeof Input> {
  handleClick?: () => void;
  title: string;
  id: string;
}

function CouponsInput({ handleClick, title, id, ...props }: Props) {
  return (
    <div className="relative flex-1">
      <Label htmlFor={id}>{title}</Label>
      <Input id={id} className="rounded-sm" {...props} />
      <CloseButton />
    </div>
  );
}

export default CouponsInput;
