import Image from "next/image";
import Link from "next/link";

const PopularArticle = (props: {
  image: string;
  title: string;
  name: string;
}) => {
  const { image, title, name } = props;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-full">
      <div
        className="wow fadeInUp mb-5 flex w-full items-center border-b border-stroke pb-5 dark:border-dark-3"
        data-wow-delay=".1s"
      >
        <div className={`mr-5 overflow-hidden rounded`}>
          <Image
            src={image}
            alt="image"
            width={80}
            height={80}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-full">
          <h4>
            <Link
              href="/#"
              className="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
            >
              {title}
            </Link>
          </h4>
          <p className="text-sm text-body-color dark:text-dark-6">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;
