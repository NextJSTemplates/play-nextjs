"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px] text-center text-white">
          <h2 className="text-3xl font-bold">You stand a chance to benefit from any of the following</h2>
          {/* <h3 className="text-2xl font-semibold mt-4">Our Pricing Plans</h3>
          <p className="text-lg mt-2">Choose a plan that fits your needs and start your journey with us.</p> */}
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingBox = ({ product }) => {
  const Icon = product.icon;

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2">
        <div className="mb-4 flex items-center justify-center">
          <Icon className="text-4xl text-primary" />
        </div>
        <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
          {product.nickname}
        </h3>
        <ul className="mb-6 list-disc pl-5 text-body-color dark:text-dark-6">
          {product.offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
        {/* <div className="text-center">
          <span className="text-3xl font-bold text-primary">
            ${product.unit_amount / 100}
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;