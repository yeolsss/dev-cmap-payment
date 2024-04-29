import DetailInfoText from "@/components/Atoms/DetailInfoText";
import DetailNameTitle from "@/components/Atoms/DetailNameTitle";

function CouponsPoint() {
  return (
    <div className="flex flex-col gap-1">
      <DetailNameTitle>
        보유 포인트 <strong>2,300</strong>
      </DetailNameTitle>
      <DetailInfoText>
        5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용 가능
      </DetailInfoText>
    </div>
  );
}

export default CouponsPoint;
