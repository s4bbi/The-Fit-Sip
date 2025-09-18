import React, { useEffect, useRef } from "react";
import { Title, Meta } from "react-head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const RefundPolicy = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rp-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={ref}
      className="w-screen bg-[#FBFBF4] px-6 md:px-20 py-12 min-h-screen "
    >
      <Title>Refund & Cancellation Policy — The Fit Sip</Title>
      <Meta
        name="description"
        content="Refund and cancellation policy of The Fit Sip covering order cancellations, damaged products, and refunds."
      />

      <div className="max-w-5xl mx-auto text-gray-900">
        <h1 className="rp-item text-2xl md:text-3xl font-cgEB mb-6 text-center">
          Cancellation and Refund Policy
        </h1>
        <ul className="rp-item list-disc list-inside space-y-3 text-gray-700 font-sR">
          <li>
            Cancellations will only be considered if the request is made on same
            days of placing the order before 10PM. However, the refund /
            replacement can be made if the user establishes that quality of the
            product delivered is not good.
          </li>
          <li>
            In case of receipt of damaged or defective items, please report to
            our customer service team. The request would be entertained once the
            seller/ merchant listed on the Platform, has checked and determined
            the same at its own end. This should be reported within 1 day of
            receipt of products.
          </li>
          <li>
            In case you feel that the product received is not as shown on the
            site or as per your expectations, you must bring it to the notice of
            our customer service within 6 hours of receiving the product.{" "}
          </li>
          <li>
            The customer service team after looking into your complaint will
            take an appropriate decision. In case of any refunds approved by THE
            FIT SIP , it will take 3 days for the refund to he processed to you.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default RefundPolicy;
