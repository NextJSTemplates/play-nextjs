import { Feature } from "@/src/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
      <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
        <div className="bg-primary relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
          <span className="bg-primary absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h3 className="text-dark mb-3 text-xl font-bold dark:text-white">
          {title}
        </h3>
        <p className="text-body-color dark:text-dark-6 mb-8 lg:mb-11">
          {paragraph}
        </p>
        <Link
          href={btnLink}
          className="text-dark hover:text-primary dark:hover:text-primary text-base font-medium dark:text-white"
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
