import MapArBg from "../assets/images/m_a_bg.png";
import mapImg from "../assets/images/m_a_map.png";
import playImg from "../assets/images/m_a_play.png";
import adminImg from "../assets/images/m_a_admin.png";
import galleryImg from "../assets/images/m_a_gallery.png";
import gitHub from "../assets/images/logo/git.png";
import steve from "../assets/images/logo/steve.png";
import { Link } from "react-router-dom";

import { motion as m } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useLanguage } from "../contexts/LangContext";

import { projects as t } from "../translations.json";
import TechLogos from "../Components/TechLogos";

export default function MappingArtPage() {
  const { mapping_art } = t;
  const { language } = useLanguage();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, ease: "easeInOut", duration: 0.5 }}
      className="bg-third bg-opacity-40 w-full pb-60 flex flex-col justify-center h-full"
    >
      <section className="flex flex-col justify-center ml-28  ">
        <Parallax
          speed={-10}
          easing={"easeInBack"}
          className="relative flex flex-row justify-center overflow-hidden h-screen"
        >
          <m.img
            initial={{ y: "-100%" }}
            animate={{ y: "-10%" }}
            transition={{
              delay: 0.5,
              type: "spring",
              damping: 10,
              ease: "easeInOut",
              duration: 1.2,
            }}
            src={MapArBg}
            alt="mapart_background"
            className="rounded-3xl shadow-2xl absolute pointer-events-none "
          ></m.img>
        </Parallax>
        <Parallax
          translateY={[10, 10]}
          speed={20}
          easing={"easeOutCirc"}
          className=" absolute top-64 inset-x-[10rem] 2xl:inset-x-[16rem] w-fit overflow-hidden  "
        >
          <m.h1
            initial={{ y: "120%" }}
            animate={{ y: "20%" }}
            transition={{
              delay: 1.7,
              type: "tween",
              ease: "backOut",
              damping: 3,
              duration: 1.5,
            }}
            className="font-pixelify md:text-[8.5rem] md:pb-10 xl:text-[10rem] text-[#081D44]"
          >
            {mapping_art.name}
          </m.h1>
        </Parallax>
        {/* *********************************************** INTRO/IMAGE ************************************************************** */}

        <Parallax
          translateY={[-30, 0]}
          speed={10}
          easing={"easeInOuQuint"}
          className=" flex justify-center md:text-4xl xl:text-7xl"
        >
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.5,
            }}
            className=" pt-20 mx-[10%] font-cbnormal text-center leading-relaxed font-semibold"
          >
            {language === "FR"
              ? mapping_art.description.introduction.fr
                  .split("\n")
                  .map((s, index) => (
                    <p className="  " key={index}>
                      {s}
                    </p>
                  ))
              : mapping_art.description.introduction.en
                  .split("\n")
                  .map((s, index) => (
                    <p className=" " key={index}>
                      {s}
                    </p>
                  ))}
          </m.p>
        </Parallax>
      </section>
      <section className="ml-20">
        <Parallax
          translateY={[40, -90]}
          speed={10}
          easing={"easeInOuQuint"}
          className="flex justify-center w-full"
        >
          <img
            src={mapImg}
            alt="mapImg"
            className=" w-[80%]  mt-40 pointer-events-none rounded-lg"
          />
        </Parallax>
        {/* *************************************************PRODUCTION/ IMAGE PRINCIPALE************************************************************ */}

        <Parallax
          // translateX={[10, 5]}
          translateY={[0, 0]}
          speed={100}
          easing={"easeInOutQuint"}
          className=" flex justify-center md:text-4xl xl:text-7xl"
        >
          <p className=" mx-[15%] font-cbnormal text-pretty leading-tight ">
            {language === "FR"
              ? mapping_art.description.production.fr
                  .split("\n")
                  .map((s, index) => (
                    <p className="flex justify-center " key={index}>
                      {s}
                    </p>
                  ))
              : mapping_art.description.production.en
                  .split("\n")
                  .map((s, index) => (
                    <p className=" flex justify-center  " key={index}>
                      {s}
                    </p>
                  ))}
          </p>
        </Parallax>
        <Parallax
          translateY={[40, -90]}
          className="flex justify-center w-full mt-20"
        >
          <img
            src={galleryImg}
            alt="galleryImg"
            className=" w-[80%]  mt-40 pointer-events-none rounded-lg"
          />
        </Parallax>

        {/* *************************************************FUNCTIONNALITY/ IMAGES************************************************************ */}

        <Parallax
          translateY={[0, 0]}
          speed={10}
          easing={"easeInOuQuint"}
          className="mx-[20%] flex justify-center md:text-4xl xl:text-7xl"
        >
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.5,
            }}
            className=" pt-20 font-cbnormal text-pretty  font-semibold"
          >
            {language === "FR"
              ? mapping_art.description.function.fr
                  .split("\n")
                  .map((s, index) => (
                    <p className=" mb-10 mx-10 " key={index}>
                      {s}
                    </p>
                  ))
              : mapping_art.description.function.en
                  .split("\n")
                  .map((s, index) => (
                    <p className=" mx-10 mb-10" key={index}>
                      {s}
                    </p>
                  ))}
          </m.p>
        </Parallax>
        <Parallax translateY={[40, -90]} className="flex justify-center w-full">
          <img
            src={adminImg}
            alt="adminImg"
            className=" w-[80%]  mt-40 pointer-events-none rounded-lg"
          />
        </Parallax>

        {/* **************************************************CONTEXT/ AUTRES *********************************************************** */}
        <p className="mx-[20%] md:text-4xl xl:text-6xl font-cbnormal leading-tight">
          {language === "FR"
            ? mapping_art.description.context.fr.split("\n").map((s, index) => (
                <p className="  mx-10  " key={index}>
                  {s}
                </p>
              ))
            : mapping_art.description.context.en.split("\n").map((s, index) => (
                <p className=" mx-10 " key={index}>
                  {s}
                </p>
              ))}
        </p>
        <Parallax
          translateY={[30 - 70]}
          speed={20}
          easing={"easeInOutCubic"}
          className="flex justify-center align-middle -ml-20    "
        >
          <img
            src={playImg}
            alt="playImg"
            className="  my-40 w-full opacity-90 rounded-lg pointer-events-none  "
          />
        </Parallax>
        <div className="flex justify-between items-center ">
          <div className="mx-[15%] flex justify-start">
            <TechLogos />
          </div>
          <div className="flex flex-col justify-end gap-10">
            <Link to="https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-CrewStillant-P3-StreetHunter">
              <m.img
                whileHover={{ scale: 1.5, transition: { delay: 0.1 } }}
                src={gitHub}
                alt="git_logo"
                className="w-[35%]"
              />
            </Link>
            <Link to="https://streetarthunter.remote-fr-4.wilders.dev/">
              <m.img
                whileHover={{ scale: 1.5, transition: { delay: 0.1 } }}
                src={steve}
                alt="steve"
                className="w-[27%] ml-[4%] "
              />
            </Link>
          </div>
        </div>
      </section>
    </m.div>
  );
}
