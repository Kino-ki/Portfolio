import lorePic from "../assets/images/Loreal_cover.png";
import shoppingPic from "../assets/images/loreal_cart.png";
import emmaPic from "../assets/images/Loreal_emma.png";
import homePic from "../assets/images/loreal_home.png";
import gitHub from "../assets/images/logo/git.png";
import { Link } from "react-router-dom";
import regisPic from "../assets/images/loreal_register.png";
import TechLogos from "../Components/TechLogos";
import { motion as m } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useLanguage } from "../contexts/LangContext";
import { projects as t } from "../translations.json";

export default function OmegaPage() {
  const { language } = useLanguage();
  const { omega } = t;

  return (
    <div className="bg-black min-w-screen">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          type: "tween",
          ease: "backIn",
          damping: 3,
          duration: 0.9,
        }}
        className="bg-black min-w-screen pb-60 flex flex-col justify-center ml-24 text-gray-200"
      >
        <section className="flex flex-col justify-center ml-2 ">
          <Parallax
            translateY={[-10, 20]}
            speed={20}
            easing={"easeInOutCubic"}
            className=" h-screen overflow-hidden flex justify-center "
          >
            <m.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, ease: "easeInOut", duration: 0.8 }}
              className="font-cbnormal flex text-white flex-col justify-center md:text-[8.5rem] xl:text-[10rem]"
            >
              OMEGA
            </m.h1>
            <h2 className="flex flex-col text-white justify-center text-2xl mt-14">
              Hackaton
              <br /> WILD CODE SCHOOL x L'OREAL
            </h2>
          </Parallax>
        </section>
        <section className="">
          {/* *********************************************** INTRO/IMAGE ************************************************************** */}
          <div className="flex flex-row justify-around">
            <Parallax
              translateY={[0, 0]}
              speed={10}
              easing={"easeInOuQuint"}
              className=" md:text-4xl xl:text-6xl"
            >
              <m.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.5,
                }}
                className=" mx-40 "
              >
                {language === "FR"
                  ? omega.description.introduction.fr
                      .split("\n")
                      .map((s, index) => (
                        <p
                          key={index}
                          className=" w-[70%] mb-10 leading-tight text-wrap  "
                        >
                          {s}
                        </p>
                      ))
                  : omega.description.introduction.en
                      .split("\n")
                      .map((s, index) => (
                        <p
                          className=" mb-10 text-wrap leading-tight "
                          key={index}
                        >
                          {s}
                        </p>
                      ))}
              </m.h3>
            </Parallax>
            <Parallax translateY={[40, -90]} className="w-full ">
              <img
                src={lorePic}
                alt="lorePic"
                className="  mt-40 opacity-70  pointer-events-none "
              />
            </Parallax>
          </div>

          {/* *************************************************PRODUCTION/ IMAGE PRINCIPALE************************************************************ */}
          <div>
            <Parallax>
              <p className="mx-[20%] md:text-4xl xl:text-6xl ">
                {language === "FR"
                  ? omega.description.production.fr
                      .split("\n")
                      .map((s, index) => (
                        <p className="  mb-10 " key={index}>
                          {s}
                        </p>
                      ))
                  : omega.description.production.en
                      .split("\n")
                      .map((s, index) => (
                        <p className="mb-10" key={index}>
                          {s}
                        </p>
                      ))}
              </p>
            </Parallax>

            <Parallax
              translateY={[30 - 70]}
              speed={20}
              easing={"easeInOutCubic"}
              className="flex justify-center align-middle -ml-20     "
            >
              <img
                src={homePic}
                alt="homePic"
                className="opacity-95 rounded-lg pointer-events-none  "
              />
            </Parallax>
          </div>
          {/* *************************************************FUNCTIONNALITY/ IMAGES************************************************************ */}
          <div className="flex flex-row justify-between mt-10 mx-20 ">
            <div className="flex flex-col">
              <Parallax className=" md:text-4xl xl:text-6xl my-40">
                <p>
                  {language === "FR"
                    ? omega.description.function.fr
                        .split("\n")
                        .map((s, index) => (
                          <p
                            className=" w-[70%] mb-10 leading-tight text-wrap   "
                            key={index}
                          >
                            {s}
                          </p>
                        ))
                    : omega.description.function.en
                        .split("\n")
                        .map((s, index) => (
                          <p
                            className="w-[70%]  mb-10 leading-tight text-wrap  "
                            key={index}
                          >
                            {s}
                          </p>
                        ))}
                </p>
              </Parallax>
              <Parallax
                translateY={[30 - 70]}
                speed={20}
                easing={"easeInOutCubic"}
                className=" w-full  "
              >
                <div className="w-full my-10">
                  <img
                    src={emmaPic}
                    alt="emmaPic"
                    className="opacity-90 rounded-lg pointer-events-none  "
                  />
                </div>
              </Parallax>
            </div>

            <Parallax
              translateY={[30 - 70]}
              speed={20}
              easing={"easeInOutCubic"}
              className=" w-full  "
            >
              <div className="w-full">
                <img
                  src={shoppingPic}
                  alt="shoppingPic"
                  className="opacity-90 rounded-lg pointer-events-none  "
                />
              </div>
            </Parallax>
          </div>

          {/* **************************************************CONTEXT/ AUTRES *********************************************************** */}

          <Parallax
            translateX={[0, -15]}
            translateY={[0, 0]}
            speed={100}
            easing={"easeOutQuint"}
            className="mx-[20%] mt-10 md:text-4xl xl:text-6xl"
          >
            {language === "FR"
              ? omega.description.context.fr.split("\n").map((s, index) => (
                  <p className=" mb-10 mx-10 " key={index}>
                    {s}
                  </p>
                ))
              : omega.description.context.en.split("\n").map((s, index) => (
                  <p className=" mx-10 mb-10" key={index}>
                    {s}
                  </p>
                ))}
          </Parallax>
        </section>
      </m.div>
      <div className="flex justify-evenly items-center">
        <div className="w-[35%]">

        <TechLogos />
        </div>
        <div className="w-[8%]">
          <Link to="https://github.com/Jhanemba64/Hackathon">
            <m.img
              whileHover={{ scale: 1.5, transition: { delay: 0.1 } }}
              src={gitHub}
              alt="git_logo"
              className="invert  pb-10"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
