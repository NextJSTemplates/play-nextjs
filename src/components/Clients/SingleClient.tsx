import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { title, link, logo, logoWhite } = client;
  return (
    <div className="ud-single-logo mb-5 mr-10 max-w-[140px]">
      <Link href={link} target="_blank" rel="nofollow noopner">
        <Image
          src={logo}
          alt={title}
          className="dark:hidden"
          width={140}
          height={40}
        />
        <Image
          src={logoWhite}
          alt={title}
          className="hidden dark:block"
          width={140}
          height={40}
        />
      </Link>
    </div>
  );
};

export default SingleClient;
