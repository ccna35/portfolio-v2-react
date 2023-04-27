import ThemeToggle from "./ThemeToggle";

const Navbar = ({ setEnabled, enabled }) => {
  return (
    <nav className="py-8 px-4 md:px-0">
      <div className="container flex justify-between items-center mx-auto">
        <div className="brand text-3xl uppercase flex items-center gap-2 text-mainColor">
          <p className=" font-bold">shawky</p>
          <p>khalil</p>
        </div>
        <div className="menu hidden md:flex items-center gap-10">
          <ThemeToggle enabled={enabled} setEnabled={setEnabled} />
          <div className="menu-items uppercase flex items-center gap-10 font-medium ">
            <p className="transition-colors duration-500 cursor-pointer text-secondColor dark:text-fourthColor hover:text-mainColor">
              projects
            </p>
            <p className="transition-colors duration-500 cursor-pointer text-secondColor dark:text-fourthColor hover:text-mainColor">
              about
            </p>
            <p className="transition-colors duration-500 cursor-pointer text-secondColor dark:text-fourthColor hover:text-mainColor">
              contact
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
