import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";
import Link from "next/link";

const Clients = () => {
  return (
    <section className="pb-20 dark:bg-dark">
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          <Link
            href="#" className="inline-block rounded-md border border-transparent bg-blue px-7 py-3 text-base font-medium text-white"
            >
            Sponsors
          </Link>
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
