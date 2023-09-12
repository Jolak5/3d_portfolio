import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 xl:top-[80px] top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            {" "}
            Hi, I&apos;m <span className='text-[#915eff]'>Kayode</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build digital solutions that help companies scale their{" "}
            <br className='sm:block hidden' />
            businesses. Stacks include React JS and Ruby on Rails
          </p>
        </div>
      </div>
      <ComputersCanvas />{" "}
      <a href='#about'>
        <div className='absolute xs:bottom-0 bottom-322 w-full flex justify-center items-center'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </div>{" "}
      </a>
    </section>
  );
};

export default Hero;
