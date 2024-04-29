"use client";

import Payment from "@/components/Pages/Payment";
import { Form } from "@/components/Atoms/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  addressMemo: z.string({}),
});

export default async function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  return (
    <main className="max-w-[1000px] w-[100%] mx-auto py-16 px-10 bg-gray-100">
      <h1 className="font-bold text-2xl text-center">결제 하기</h1>
      <Form {...form}>
        <form className="flex gap-5">
          <Payment flex={"flex-[6]"}>
            {/*주문 상품 정보*/}
            <Payment.OrderInfoCard>
              <Payment.OrderInfoCard.Title>
                주문 상품 정보
              </Payment.OrderInfoCard.Title>
              <Payment.OrderInfoCard.OrderInfoDetail
                src={"/images/item-img.png"}
                alt={"제품이미지"}
              />
            </Payment.OrderInfoCard>
            {/*주문 상품 정보*/}

            {/* 주문자 정보 */}
            <Payment.OrderUserCard>
              <Payment.OrderUserCard.Title>
                주문자 정보
              </Payment.OrderUserCard.Title>
              <Payment.OrderUserCard.OrderUserDetail />
            </Payment.OrderUserCard>
            {/* 주문자 정보 */}

            {/* 배송 정보 */}
            <Payment.OrderShippingCard>
              <Payment.OrderShippingCard.Title>
                배송 정보
              </Payment.OrderShippingCard.Title>
              <Payment.OrderShippingCard.OrderShippingDetail />
              <Payment.OrderShippingCard.ShippngMemo />
            </Payment.OrderShippingCard>
            {/* 배송 정보 */}

            {/* 쿠폰/포인트 */}
            <Payment.CouponsCard>
              <Payment.CouponsCard.Title>쿠폰/포인트</Payment.CouponsCard.Title>
              <Payment.CouponsCard.CouponsField>
                <Payment.CouponsCard.CouponsField.InputField
                  id={"coupon"}
                  title={"쿠폰"}
                />
                <Payment.CouponsCard.CouponsField.Button
                  type="button"
                  className="rounded-sm bg-[#1a6dff] hover:bg-[#1a93ff]"
                >
                  쿠폰적용
                </Payment.CouponsCard.CouponsField.Button>
              </Payment.CouponsCard.CouponsField>

              <Payment.CouponsCard.CouponsField>
                <Payment.CouponsCard.CouponsField.InputField
                  id={"couponNumber"}
                  title={"쿠폰 번호"}
                />
                <Payment.CouponsCard.CouponsField.Button
                  type="button"
                  className="rounded-sm bg-[#1a6dff] hover:bg-[#1a93ff]"
                >
                  번호확인
                </Payment.CouponsCard.CouponsField.Button>
              </Payment.CouponsCard.CouponsField>

              <Payment.CouponsCard.CouponsField>
                <Payment.CouponsCard.CouponsField.InputField
                  id={"point"}
                  title={"포인트"}
                />
                <Payment.CouponsCard.CouponsField.Button
                  type="button"
                  className="rounded-sm bg-[#1a6dff] hover:bg-[#1a93ff]"
                >
                  전액사용
                </Payment.CouponsCard.CouponsField.Button>
              </Payment.CouponsCard.CouponsField>

              <Payment.CouponsCard.CouponsPoint />
            </Payment.CouponsCard>
            {/* 쿠폰/포인트 */}
          </Payment>

          {/* 2섹션 */}
          <Payment flex="flex-[4]">
            {/* 최종 결제금액 */}
            <Payment.FinalPaymentCard className={"pb-20"}>
              <Payment.FinalPaymentCard.Title>
                최종 결제금액
              </Payment.FinalPaymentCard.Title>

              <Payment.FinalPaymentCard.FinalPaymentCalGroup />
              <div className="border"></div>
              <Payment.FinalPaymentCard.FinalTotalPayment>
                19,500
              </Payment.FinalPaymentCard.FinalTotalPayment>
              <Payment.FinalPaymentCard.PointSaveText>
                700
              </Payment.FinalPaymentCard.PointSaveText>
            </Payment.FinalPaymentCard>
            {/* 최종 결제금액 */}

            {/*결제 방법*/}
            <Payment.PaymentMethodCard>
              <Payment.PaymentMethodCard.Title>
                결제 방법
              </Payment.PaymentMethodCard.Title>
              <Payment.PaymentMethodCard.PaymentMethodRadio />
              <Payment.PaymentMethodCard.PaymentMethodInputGroup />
              <div className="border"></div>
              <Payment.PaymentMethodCard.PaymentCheckbox id={"cashReceipts"}>
                현금영수증 신청
              </Payment.PaymentMethodCard.PaymentCheckbox>
            </Payment.PaymentMethodCard>
            {/*결제 방법*/}

            {/*전체 동의*/}
            <Payment.AgreeCard className="pb-20 relative">
              <Payment.AgreeCard.AgreeCheckGroup />
              <Payment.AgreeCard.SubmitButton className="absolute bottom-0 py-6 text-xl left-0 w-full rounded-sm rounded-t-none bg-[#1a6dff] hover:bg-[#1a93ff]">
                결제하기
              </Payment.AgreeCard.SubmitButton>
            </Payment.AgreeCard>
            {/*전체 동의*/}
          </Payment>
          {/* 2섹션 */}
        </form>
      </Form>
    </main>
  );
}
