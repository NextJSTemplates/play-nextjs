import { FaAward, FaChalkboardTeacher, FaUniversity } from "react-icons/fa";

interface Product {
  icon: React.ElementType;
  nickname: string;
  offers: string[];
  unit_amount: number;
}

const PricingBox = ({ product }: { product: Product }) => {
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
          {product.offers.map((offer: string, index: number) => (
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

export default PricingBox;