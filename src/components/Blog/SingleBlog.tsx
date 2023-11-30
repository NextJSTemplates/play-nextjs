import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, excerpt, date, slug } = blog;

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden rounded">
        <Link href={`/blogs/${slug}`} aria-label="blog cover" className="block">
          <Image
            src={image}
            alt="image"
            className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            width={408}
            height={272}
          />
        </Link>
      </div>
      <div>
        {/* <span className="bg-primary mb-5 inline-block rounded px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
          <div dangerouslySetInnerHTML={{ __html: date }}></div>
        </span> */}
        <h3>
          <Link
            href={`/blogs/${slug}`}
            className="text-dark hover:text-primary dark:hover:text-primary mb-4 inline-block text-xl font-semibold dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="text-body-color dark:text-dark-6 text-base">{excerpt}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
