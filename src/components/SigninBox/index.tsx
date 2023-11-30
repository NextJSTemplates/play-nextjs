import Image from "next/image";
import Link from "next/link";

const SigninBox = ({ children }) => {
  return (
    <div
      className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-8 py-14 text-center sm:px-12 md:px-[60px]"
      data-wow-delay=".15s"
    >
      <div className="mb-10 text-center">
        <Link href="/#" className="mx-auto inline-block max-w-[160px]">
          <Image
            src="/images/logo/logo.svg"
            alt="logo"
            width={157}
            height={56}
          />
        </Link>
      </div>
      {children}

      <div>
        <span className="absolute right-1 top-1">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="1.39737"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 1.39737 38.6026)"
              fill="#3056D3"
            />
            <circle
              cx="1.39737"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 1.39737 1.99122)"
              fill="#3056D3"
            />
            <circle
              cx="13.6943"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 13.6943 38.6026)"
              fill="#3056D3"
            />
            <circle
              cx="13.6943"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 13.6943 1.99122)"
              fill="#3056D3"
            />
            <circle
              cx="25.9911"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 25.9911 38.6026)"
              fill="#3056D3"
            />
            <circle
              cx="25.9911"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 25.9911 1.99122)"
              fill="#3056D3"
            />
            <circle
              cx="38.288"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 38.288 38.6026)"
              fill="#3056D3"
            />
            <circle
              cx="38.288"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 38.288 1.99122)"
              fill="#3056D3"
            />
            <circle
              cx="1.39737"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 1.39737 26.3057)"
              fill="#3056D3"
            />
            <circle
              cx="13.6943"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 13.6943 26.3057)"
              fill="#3056D3"
            />
            <circle
              cx="25.9911"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 25.9911 26.3057)"
              fill="#3056D3"
            />
            <circle
              cx="38.288"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 38.288 26.3057)"
              fill="#3056D3"
            />
            <circle
              cx="1.39737"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 1.39737 14.0086)"
              fill="#3056D3"
            />
            <circle
              cx="13.6943"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 13.6943 14.0086)"
              fill="#3056D3"
            />
            <circle
              cx="25.9911"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 25.9911 14.0086)"
              fill="#3056D3"
            />
            <circle
              cx="38.288"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 38.288 14.0086)"
              fill="#3056D3"
            />
          </svg>
        </span>
        <span className="absolute bottom-1 left-1">
          <svg
            width="29"
            height="40"
            viewBox="0 0 29 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="2.288"
              cy="25.9912"
              r="1.39737"
              transform="rotate(-90 2.288 25.9912)"
              fill="#3056D3"
            />
            <circle
              cx="14.5849"
              cy="25.9911"
              r="1.39737"
              transform="rotate(-90 14.5849 25.9911)"
              fill="#3056D3"
            />
            <circle
              cx="26.7216"
              cy="25.9911"
              r="1.39737"
              transform="rotate(-90 26.7216 25.9911)"
              fill="#3056D3"
            />
            <circle
              cx="2.288"
              cy="13.6944"
              r="1.39737"
              transform="rotate(-90 2.288 13.6944)"
              fill="#3056D3"
            />
            <circle
              cx="14.5849"
              cy="13.6943"
              r="1.39737"
              transform="rotate(-90 14.5849 13.6943)"
              fill="#3056D3"
            />
            <circle
              cx="26.7216"
              cy="13.6943"
              r="1.39737"
              transform="rotate(-90 26.7216 13.6943)"
              fill="#3056D3"
            />
            <circle
              cx="2.288"
              cy="38.0087"
              r="1.39737"
              transform="rotate(-90 2.288 38.0087)"
              fill="#3056D3"
            />
            <circle
              cx="2.288"
              cy="1.39739"
              r="1.39737"
              transform="rotate(-90 2.288 1.39739)"
              fill="#3056D3"
            />
            <circle
              cx="14.5849"
              cy="38.0089"
              r="1.39737"
              transform="rotate(-90 14.5849 38.0089)"
              fill="#3056D3"
            />
            <circle
              cx="26.7216"
              cy="38.0089"
              r="1.39737"
              transform="rotate(-90 26.7216 38.0089)"
              fill="#3056D3"
            />
            <circle
              cx="14.5849"
              cy="1.39761"
              r="1.39737"
              transform="rotate(-90 14.5849 1.39761)"
              fill="#3056D3"
            />
            <circle
              cx="26.7216"
              cy="1.39761"
              r="1.39737"
              transform="rotate(-90 26.7216 1.39761)"
              fill="#3056D3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SigninBox;
