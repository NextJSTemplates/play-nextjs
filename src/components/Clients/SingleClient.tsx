import Image from "next/image";
import Link from "next/link";

const SingleClient = (props: {
  address: string;
  image: string;
  name: string;
}) => {
  const { address, image, name } = props;
  return (
    <div className="ud-single-logo mb-5 mr-10 max-w-[140px]">
      <Link href={address} target="_blank" rel="nofollow noopner">
        <Image
          src={image}
          alt={name}
          width={140}
          height={40}
          className="grayscale duration-300 hover:filter-none"
        />
      </Link>
    </div>
  );
};

export default SingleClient;
