import Payment from "@/components/Pages/Payment";

export default async function Home() {
  return (
    <main className="max-w-[1000px] w-[100%] mx-auto py-16 px-10 bg-gray-100">
      <h1 className="font-bold text-2xl text-center">결제 하기</h1>
      <Payment>
        {/*주문 상품 정보*/}
        <Payment.OrderInfoCard>
          <Payment.OrderInfoCard>
            <Payment.OrderInfoCard.Title>
              주문 상품 정보
            </Payment.OrderInfoCard.Title>
            <Payment.OrderInfoCard.OrderInfoDetail
              src={"/images/item-img.png"}
              alt={"제품이미지"}
            ></Payment.OrderInfoCard.OrderInfoDetail>
          </Payment.OrderInfoCard>
        </Payment.OrderInfoCard>
        {/*주문 상품 정보*/}

        {/* 주문자 정보 */}

        {/* 주문자 정보 */}
      </Payment>
    </main>
  );
}
