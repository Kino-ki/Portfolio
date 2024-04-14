import { biography, navbar } from "../translations.json";
import { Link } from "react-router-dom";

import { AnimatePresence, motion as m } from "framer-motion";
import profImg from "../assets/images/profile.png";
import gitLogo from "../assets/images/logo/git.png";
import linkedInLogo from "../assets/images/logo/linkedIn.png";

import { useLanguage } from "../contexts/LangContext";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <AnimatePresence>
      <m.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="min-w-screen h-screen overflow-y-auto bg-[#ffdfbf] bg-opacity-65"
      >
        <m.div
          whileInView="visible"
          viewport={{ once: true }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ y: "-100%", duration: 0.75 }}
          key={2}
          className="p-5 bg-secondary pl-20 min-h-screen overflow-hidden absolute top-0 left-0  w-full flex flex-col lg:ml-0 shadow-xl"
        >
          <m.h1
            initial={{ y: "50%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, delay:0.4, ease: "backOut" }}
            className="text-end text-balance md:text-[12rem] text-7xl font-kinfolk font-extralight mb-20 ml-8 underline decoration-2"
          >
            {language === "FR" ? navbar.about.fr : navbar.about.en}
          </m.h1>

          <AnimatePresence>
            <m.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              key={5}
              className="flex flex-row-reverse justify-between mx-40 lg:mr-0"
            >
              <div className=" flex flex-col justify-center text-balance font-cbnormal  lg:text-[1.8rem] lg:ml-72 mr-20">
                <m.text
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
                >
                  {language === "FR"
                    ? biography.fr.split("\n").map((s, index) => (
                        <p className=" mb-5 mx-16 " key={index}>
                          {s}
                        </p>
                      ))
                    : biography.en.split("\n").map((s, index) => (
                        <p className=" mb-5 mx-16 " key={index}>
                          {s}
                        </p>
                      ))}
                </m.text>
                <section className="flex flex-row justify-center mt-10 gap-24 mx-12">
                  <Link to="https://www.linkedin.com/in/faiza-fehri/">
                    <m.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.4,
                        ease: "backOut",
                      }}
                      whileHover={{ scale: 1.1, transition: { delay: 0.1 } }}
                      width={100}
                      height={60}
                      src={linkedInLogo}
                      alt="LinkedInlogo"
                    />
                  </Link>
                  <Link to="https://github.com/Kino-ki">
                    <m.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.6,
                        ease: "backOut",
                      }}
                      whileHover={{ scale: 1.1, transition: { delay: 0.1 } }}
                      width={100}
                      height={60}
                      src={gitLogo}
                      alt="git_logo"
                    />
                  </Link>
                </section>
              </div>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1, ease: "backOut" }}
                className="flex flex-row justify-center pointer-events-none  w-full h-full ml-10"
              >
                <img
                  src={profImg}
                  alt="profImg"
                  className=" rounded-lg opacity-95"
                />
              </m.div>
            </m.div>
          </AnimatePresence>
        </m.div>
      </m.div>
    </AnimatePresence>
  );
}
