import { Link } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion";
import * as t from "../translations.json";
import linkedInLogo from "../assets/images/logo/linkedIn.png";
import gitLogo from "../assets/images/logo/git.png";
import { useLanguage } from "../contexts/LangContext";

export default function HomePage() {
  const { navbar, presentation } = t;
  const { language } = useLanguage();
  return (
    <m.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="bg-[#ccb093] bg-opacity-65 w-screen h-screen"
    >
      {/* -------------------------------------------------------BACKGROUND DIV   ---------------------------------------------------------- */}
      <m.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        key={"4"}
        transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
        exit={{ y: "-100%", duration: 0.75 }}
        className=" min-h-screen flex flex-row-reverse justify-between bg-gradient-to-bl from-background to-[#dbc3ab] fixed w-screen top-0"
      >
        {/* ------------------------------------LIST MENU  -------------------------- */}
        <ul className="flex flex-col  lg:text-[10rem] text-7xl font-kinfolk text-textRed  my-auto text-end lg:p-10   ">
          <AnimatePresence>
            <m.div
              className=""
              whileHover={{
                fontStyle: "italic",
                x: "0.8%",
                transition: { ease: "easeInOut", delay: 0.1 },
              }}
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.8, ease: "easeIn", delay: 0.15 }}
              exit={{ y: "-100%", duration: 0.75 }}
            >
              <Link to="/works" className="">
                {" "}
                {language === "FR" ? navbar.works.fr : navbar.works.en}
              </Link>
            </m.div>
            <m.div
              whileHover={{
                fontStyle: "italic",
                x: "0.8%",
                transition: { ease: "easeIn", delay: 0.1 },
              }}
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              exit={{ y: "-100%", duration: 0.75 }}
            >
              <Link to="/about" className="">
                {language === "FR" ? navbar.about.fr : navbar.about.en}
              </Link>
            </m.div>

            <m.div
              whileHover={{
                fontStyle: "italic",
                x: "0.5%",
                transition: { ease: "easeIn", delay: 0.1 },
              }}
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              exit={{ y: "-100%", duration: 0.75 }}
            >
              <Link to="/contact" className="">
                CONTACT
              </Link>
            </m.div>
          </AnimatePresence>
        </ul>
        {/* ------------------------------------NAME -------------------------- */}
        <m.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: "easeIn" }}
          className=" flex flex-col justify-around bg-gradient-to-l from-transparent from-20%  via-[#f3d8be] via-70% to-transparent to-90% p-16 text-end font-cblight w-[40%] "
        >
          <div>
            <div className="overflow-hidden  ">
              <m.p
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeIn" }}
                className=" text-6xl text-[#394039] border-l-2 border-[#332c24]   pt-6 pl-4   "
              >
                {presentation.name}
              </m.p>
            </div>
            <div className="overflow-hidden ">
              <m.p
                initial={{ y: "130%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, delay: 1.8, ease: "easeIn" }}
                className="text-xl pt-4 font-cbnormal border-l-2 pb-16 pl-4 border-[#332c24]  text-textRed "
              >
                {language === "FR"
                  ? presentation.description.fr.split("\n").map((s, index) => (
                    <p className="  " key={index}>
                      {s}
                    </p>
                  ))
                  : presentation.description.en.split("\n").map((s, index) => (
                    <p className="  " key={index}>
                      {s}
                    </p>
                  ))}
                .
              </m.p>
            </div>
          </div>
          <section className="flex flex-row justify-around mx-12">
            <Link to="https://www.linkedin.com/in/faiza-fehri/">
              <m.img
                whileHover={{ scale: 1.1, transition: { delay: 0.1 } }}
                width={100}
                height={100}
                src={linkedInLogo}
                alt="LinkedInlogo"
              />
            </Link>
            <Link to="https://github.com/Kino-ki">
              <m.img 
                whileHover={{ scale: 1.1, transition: { delay: 0.1 } }}
                width={100}
                height={100}
                src={gitLogo}
                alt="git_logo"
              />
            </Link>
          </section>
        </m.section>
      </m.div>
    </m.div>
  );
}
