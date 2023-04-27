import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="py-4 lg:py-24 px-4 md:px-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="intro flex flex-col lg:basis-1/2 dark:text-fourthColor gap-8 text-center lg:text-left">
          <motion.div
            className=""
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="text-2xl">I'm Shawky Khalil,</p>
          </motion.div>
          <motion.p
            className="text-5xl md:text-7xl text-mainColor uppercase font-bold"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            web developer
          </motion.p>
          <motion.p
            className="text-lg md:text-2xl font-light leading-10"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          >
            I build awesome websites using the latest technologies, I’m always
            motivated to take on new projects and learn something new everyday.
          </motion.p>
          <div className="action btns flex gap-8 justify-center lg:justify-start">
            <motion.button
              className="py-2 px-4 bg-mainColor uppercase hover:bg-thirdColor hover:text-secondColor transition-colors duration-500"
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              projects
            </motion.button>
            <motion.button
              className="py-2 px-4 bg-mainColor uppercase hover:bg-thirdColor hover:text-secondColor transition-colors duration-500"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              about me
            </motion.button>
          </div>
        </div>
        <motion.div
          className="dev-img relative  overflow-hidden drop-shadow-2xl"
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 2.5 }}
        >
          <motion.img
            src="./floating-tech-icons\react-javascript-js-framework-facebook-svgrepo-com.svg"
            className="w-8 md:w-12 lg:w-16 absolute top-4 left-20"
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              delay: 3,
            }}
          />
          <img
            src="./floating-tech-icons\html-5-svgrepo-com.svg"
            className="w-8 md:w-12 lg:w-16 absolute top-28 left-12 animate-pulse"
          />
          <img
            src="./floating-tech-icons\javascript-svgrepo-com.svg"
            className="w-8 md:w-12 lg:w-16 absolute top-28 right-12 animate-pulse"
          />
          <img
            src="./floating-tech-icons\css-3-svgrepo-com.svg"
            className="w-8 md:w-12 lg:w-16 absolute top-0 right-20 animate-pulse"
          />
          <img src="./undraw_coding_re_iv62.svg" className=" object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
