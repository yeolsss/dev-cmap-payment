import DetailNameTitle from "@/components/Atoms/DetailNameTitle";
import DetailInfoText from "@/components/Atoms/DetailInfoText";
import { Button } from "@/components/Atoms/button";

function OrderShippingDetail() {
  return (
    <article>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <DetailNameTitle>홍길동</DetailNameTitle>
          <DetailInfoText>01012345678</DetailInfoText>
          <DetailNameTitle>
            서울특별시 서대문구 성산로7길 89-8 (연희동)
          </DetailNameTitle>
          <DetailNameTitle>주식회사 아임웹</DetailNameTitle>
          <DetailNameTitle>(03706)</DetailNameTitle>
        </div>
        <div>
          <Button variant="outline" className="rounded-sm">
            변경
          </Button>
        </div>
      </div>
    </article>
  );
}

export default OrderShippingDetail;
