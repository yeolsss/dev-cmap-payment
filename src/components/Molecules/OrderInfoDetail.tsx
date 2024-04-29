import Image from "next/image";
import { Badge } from "@/components/Atoms/badge";
import DetailNameTitle from "@/components/Atoms/DetailNameTitle";

interface Props {
  src: string;
  alt: string;
}

function OrderInfoDetail({ src, alt }: Props) {
  return (
    <article className="flex gap-5">
      <Image src={src} alt={alt} width={92} height={92} />
      <div className="flex flex-col gap-2">
        <DetailNameTitle>Daily facial Soap</DetailNameTitle>
        <div className=" text-sm flex gap-2">
          <Badge
            variant={"outline"}
            className="text-gray-300 text-[0.65rem] py-0 px-1"
          >
            필수
          </Badge>
          <div className="opacity-30">
            <span className="font-bold text-inherit">용량</span>
            <span className="text-inherit">:</span>
            <span className="text-inherit">80ml - 1개</span>
          </div>
        </div>
        <span className="text-sm font-[500]">18,000원</span>
      </div>
    </article>
  );
}

export default OrderInfoDetail;
