import cover from "../assets/images/dragoti1.png";
import tamagosick from "../assets/images/drago_sick.png";
import tama from "../assets/images/logo/tamacolours.png";
import game from "../assets/images/drago_game.png";
import instructions from "../assets/images/dragotinstru.png";
import gitHub from "../assets/images/logo/git.png";
import contact from "../assets/images/dracom.png";

import { Link } from "react-router-dom";

import { motion as m } from "framer-motion";
import { projects as t } from "../translations.json";
import { Parallax } from "react-scroll-parallax";
import { useLanguage } from "../contexts/LangContext";
import TechLogos from "../Components/TechLogos";

export default function DragotitPage() {
  const { language } = useLanguage();
  const { dragoti } = t;

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, ease: "easeInOut", duration: 0.5 }}
      className="bg-dragotiBg bg-fixed overflow-y-auto bg-repeat bg-opacity-40 w-full flex flex-col  no-scrollbar"
    >
      <div className=" backdrop-blur-[1.5px]  bg-orange-100/15 ml-24 ">
        <section className="flex flex-col justify-evenly ml-1 ">
          <Parallax
            rotateZ={[-90, 0]}
            speed={10}
            easing={"easeOutCirc"}
            className="relative flex flex-row overflow-hidden  h-screen w-screen"
          >
            <div className="overflow-hidden z-0 flex ">
              <m.img
                initial={{ y: "0%" }}
                animate={{ y: "10%", rotate: -20 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  damping: 10,
                  ease: "easeInOut",
                  duration: 1.2,
                }}
                src={tama}
                alt="dragoti_cover"
                className="rounded-3xl pointer-events-none  absolute md:w-[20%] lg:w-[30%] "
              />
            </div>
          </Parallax>
          <Parallax
            // rotateZ={[180, -180]}
            speed={-20}
            easing={"easeOutCirc"}
            className=" absolute top-6 inset-x-[10rem] 2xl:inset-x-[16rem] w-fit overflow-hidden  "
          >
            <m.h1
              initial={{ y: "80%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 1,
                type: "spring",
                ease: "easeIn",
                damping: 9,
              }}
              className="font-irishgrov mt-[7%] md:text-[8.5rem] xl:text-[13rem] text-[#fffc46] drop-shadow-[0_6.3px_1.2px_rgba(0,0,0,0.9)]"
            >
              {dragoti.name}
            </m.h1>
          </Parallax>

          <m.text
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.2,
              delay: 0.5,
            }}
            className=" bg-zinc-900 bg-opacity-90 md:text-4xl xl:text-5xl px-40 py-16 text-[#e34adc] font-cbnormal font-semibold "
          >
            {language === "FR"
              ? dragoti.description.introduction.fr.map((s, index) => (
                  <p key={index} className=" mx-10 mr-[25%] leading-relaxed">
                    {s}
                  </p>
                ))
              : dragoti.description.introduction.en.map((s, index) => (
                  <p className=" mx-10 mr-[25%] leading-relaxed" key={index}>
                    {s}
                  </p>
                ))}
          </m.text>
        </section>

        <section className="flex flex-col">
          <div className=" mt-[10%]  flex  justify-evenly h-fit">
            <Parallax
              translateY={[20, -40]}
              speed={10}
              easing={"easeInOut"}
              className=""
            >
              <img
                src={cover}
                alt="tamagOk"
                className=" pointer-events-none  w-[90%] rounded-3xl shadow-[6px_9px_6px_0.5px_rgba(0,0,0,0.65)] "
              />
            </Parallax>
            <Parallax
              translateY={[10, 80]}
              speed={-10}
              easing={"easeInOutQuart"}
              rootMargin={{ bottom: 0 }}
              className=""
            >
              <img
                src={tamagosick}
                alt="tamagosick"
                className=" pointer-events-none w-[90%] rounded-3xl shadow-[6px_9px_6px_0.5px_rgba(0,0,0,0.65)]"
              />
            </Parallax>
          </div>
          <div className="mt-60 bg-zinc-900 text-pretty  md:text-4xl xl:text-5xl bg-opacity-90 px-40 py-12  text-[#e34adc] font-cbnormal font-semibold">
            {language === "FR"
              ? dragoti.description.production.fr
                  .split("\n")
                  .map((s, index) => (
                    <p
                      className=" mx-10 leading-relaxed lg:mr-[25%] md:mr-0"
                      key={index}
                    >
                      {s}
                    </p>
                  ))
              : dragoti.description.production.en
                  .split("\n")
                  .map((s, index) => (
                    <p className=" mx-10 leading-relaxed" key={index}>
                      {s}
                    </p>
                  ))}
          </div>
          <div className="flex flex-col min-h-screen justify-around mx-10 no-scrollbar">
            <m.figure
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{
                type: "tween",
                ease: "backOut",
                duration: 1,
                delay: 0,
              }}
              className=" flex  justify-start  "
            >
              <m.figcaption
                htmlFor="game"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.1,
                  delay: 0.5,
                }}
                className="text-pretty bg-zinc-800 font-cbnormal font-semibold rounded-xl md:text-2xl xl:text-4xl  bg-opacity-70 p-2 text-[#e34adc] relative bottom-20 inset-x-0 z-10 "
              >
                {language === "FR" ? "JEU" : "GAME"}
              </m.figcaption>
              <img
                src={game}
                width={500}
                alt="game"
                className=" rounded-3xl pointer-events-none fixed w-[30%]  "
              />
            </m.figure>

            <m.figure
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{
                type: "tween",
                damping: 9,
                ease: "backOut",

                duration: 1,
                delay: 0.1,
              }}
              className="flex justify-center "
            >
              <m.figcaption
                htmlFor="instructions "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.1,
                  delay: 0.5,
                }}
                className="text-pretty  bg-zinc-800 font-cbnormal font-semibold rounded-xl md:text-2xl xl:text-4xl  bg-opacity-70 p-2 text-[#e34adc] relative bottom-20 z-10 "
              >
                INSTRUCTIONS
              </m.figcaption>
              <img
                src={instructions}
                width={500}
                alt="instructions"
                className=" pointer-events-none fixed w-[30%]  rounded-3xl "
              />
            </m.figure>

            <m.figure
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{
                type: "tween",
                ease: "backOut",

                damping: 10,
                duration: 1,
                delay: 0.2,
              }}
              className="flex justify-end relative"
            >
              <img
                src={contact}
                width={500}
                alt="contact"
                className=" rounded-3xl pointer-events-none fixed w-[30%]"
              />
              <m.figcaption
                htmlFor="contact "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.1,
                  delay: 0.5,
                }}
                className="text-pretty  bg-zinc-800 font-cbnormal font-semibold rounded-xl md:text-2xl xl:text-4xl bg-opacity-7 0 p-2 text-[#e34adc] relative flex-start inset-x-0 bottom-20 z-10 "
              >
                {language === "FR" ? "CONTACT & EQUIPE" : "CONTACT & TEAM"}
              </m.figcaption>
            </m.figure>
          </div>
          <Parallax translateY={[30, -80]} speed={10} easing={"easeInOutQuart"}>
            <div className=" bg-zinc-900 text-pretty  md:text-4xl xl:text-5xl bg-opacity-90 px-40 py-10  mt-60 text-[#e34adc] font-cbnormal font-semibold">
              {language === "FR"
                ? dragoti.description.context.fr.split("\n").map((s, index) => (
                    <p className=" mb-10 mx-10 " key={index}>
                      {s}
                    </p>
                  ))
                : dragoti.description.context.en.split("\n").map((s, index) => (
                    <p className=" mx-10 mb-10" key={index}>
                      {s}
                    </p>
                  ))}
            </div>
          {/* *************************************************TechLogoS************************************************************ */}

              <div className="flex justify-evenly items-center bg-zinc-900 text-pretty bg-opacity-90 mt-10 pt-5 mb-3">
                <div className="flex justify-evenly items-center  px-96  ">
                  <TechLogos />
                </div>
                <div className="flex justify-center items-center gap-10 mr-20">
                  <div className=" flex flex-col justify-center items-center mb-2 h-fit">
                    <Link to="https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-P1-CrewStillant-TamagoTeam">
                      <m.img
                        whileHover={{ scale: 1.5, transition: { delay: 0.1 } }}
                        src={gitHub}
                        width={220}
                        alt="git_logo"
                        className="  invert"
                      />
                    </Link>
                  </div>
                  <Link to="https://tamagoti-team.vercel.app/">
                    <div className="flex flex-col justify-center items-center">
                      <m.img
                        whileHover={{ scale: 1.5, transition: { delay: 0.1 } }}
                        src={tama}
                        width={230}
                        alt="tama"
                        className=" "
                      />
                    </div>
                  </Link>
                </div>
              </div>
          </Parallax>
        </section>
      </div>
    </m.div>
  );
}
