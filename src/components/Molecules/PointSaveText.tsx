import AccentText from "@/components/Atoms/AccentText";
import { ReactNode } from "react";
import DetailNameTitle from "@/components/Atoms/DetailNameTitle";

interface Props {
  children: ReactNode;
}

function PointSaveText({ children }: Props) {
  return (
    <div className="absolute flex gap-1 bottom-0 left-0 p-5 bg-gray-50 w-full rounded-b-sm">
      <AccentText className="text-sm">{children}</AccentText>
      <DetailNameTitle>포인트 적립예정</DetailNameTitle>
    </div>
  );
}

export default PointSaveText;
