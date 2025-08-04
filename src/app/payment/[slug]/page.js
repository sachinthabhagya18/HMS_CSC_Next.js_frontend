import PaymentFailer from "@/component/payment/PaymentFailer";
import PaymentSuccess from "@/component/payment/PaymentSuccess";
import Link from "next/link";
export default function page({params}) {
  const slug = params.slug;
  return (
    <main>
      {
        slug == 'success' && <PaymentSuccess />
      }
      {
        slug == 'failure' && <PaymentFailer />
      }
    </main>
  );
}
