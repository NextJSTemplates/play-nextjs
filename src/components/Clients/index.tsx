const Clients = () => {
  return (
    <section className="pb-20 dark:bg-dark">
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          <a href="https://graygrids.com/">
            <img
              src="./images/brands/graygrids.svg"
              alt="graygrids"
              className="dark:hidden"
            />
            <img
              src="./images/brands/graygrids-white.svg"
              alt="graygrids"
              className="hidden dark:block"
            />
          </a>
          <a href="https://lineicons.com/">
            <img
              src="./images/brands/lineicons.svg"
              alt="lineicons"
              className="dark:hidden"
            />
            <img
              src="./images/brands/lineicons-white.svg"
              alt="graygrids"
              className="hidden dark:block"
            />
          </a>
          <a href="https://uideck.com/">
            <img
              src="./images/brands/uideck.svg"
              alt="uideck"
              className="dark:hidden"
            />
            <img
              src="./images/brands/uideck-white.svg"
              alt="graygrids"
              className="hidden dark:block"
            />
          </a>
          <a href="https://ayroui.com/">
            <img
              src="./images/brands/ayroui.svg"
              alt="ayroui"
              className="dark:hidden"
            />
            <img
              src="./images/brands/ayroui-white.svg"
              alt="graygrids"
              className="hidden dark:block"
            />
          </a>
          <a href="https://tailgrids.com/">
            <img
              src="./images/brands/tailgrids.svg"
              alt="tailgrids"
              className="dark:hidden"
            />
            <img
              src="./images/brands/tailgrids-white.svg"
              alt="graygrids"
              className="hidden dark:block"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
