import DetailNameTitle from "@/components/Atoms/DetailNameTitle";
import { Button } from "@/components/Atoms/button";
import DetailInfoText from "@/components/Atoms/DetailInfoText";

function OrderUserDetail() {
  return (
    <article>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <DetailNameTitle>홍길동</DetailNameTitle>
          <DetailInfoText>01012345678</DetailInfoText>
          <DetailInfoText>user@imweb.me</DetailInfoText>
        </div>
        <div>
          <Button variant="outline" className="rounded-sm">
            수정
          </Button>
        </div>
      </div>
    </article>
  );
}

export default OrderUserDetail;
