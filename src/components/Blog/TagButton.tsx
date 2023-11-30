import Link from "next/link";

const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <Link
      href={href}
      className="mb-2 mr-2 block rounded bg-primary bg-opacity-5 px-5 py-2 text-xs font-medium text-primary hover:bg-opacity-100 hover:text-white md:mr-4 lg:mr-2 xl:mr-4"
    >
      {text}
    </Link>
  );
};

export default TagButton;
