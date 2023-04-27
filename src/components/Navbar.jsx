const Navbar = () => {
  return (
    <nav className="py-8 px-4 md:px-0">
      <div className="container flex justify-between items-center mx-auto">
        <div className="brand text-3xl uppercase flex items-center gap-2 text-mainColor">
          <p className=" font-bold">shawky</p>
          <p>khalil</p>
        </div>
        <div className="menu hidden md:flex items-center gap-10">
          <div className="toggle w-10 h-6 p-1 rounded-full bg-thirdColor flex justify-start items-center">
            <div className="ball h-4 w-4 rounded-full bg-secondColor"></div>
          </div>
          <div className="menu-items uppercase flex items-center gap-10 font-medium text-fourthColor">
            <p className="transition-colors duration-500 cursor-pointer hover:text-mainColor">
              projects
            </p>
            <p className="transition-colors duration-500 cursor-pointer hover:text-mainColor">
              about
            </p>
            <p className="transition-colors duration-500 cursor-pointer hover:text-mainColor">
              contact
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
