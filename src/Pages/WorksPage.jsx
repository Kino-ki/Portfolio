import * as t from "../translations.json";
import { useLanguage } from "../contexts/LangContext";
import "./MaskStyles.css";
import { motion as m } from "framer-motion";
import useMousePosition from "../Helper/useMousePosition";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function WorksPage() {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 150;

  const { language } = useLanguage();
  const { projects } = t;
  const navigate = useNavigate();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" bg-[#faedc5] bg-opacity-40  overflow-hidden "
    >
      {/*    ---**********--------------------  BODY       ---------------------------------------------------------- */}
      <m.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        exit={{ opacity: 1 }}
        className="min-h-screen p-5 flex flex-col overflow-hidden  bg-gradient-to-bl from-fourth from-70% to-[#ccc095] absolute top-0 left-0 w-full "
      >
        <m.h1
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.16, ease: "easeInOut" }}
          exit={{ y: "-100%", duration: 0.75 }}
          className="text-end  text-balance text-7xl lg:text-[12rem] font-kinfolk font-extralight mb-20 mt-5 underline decoration-2 "
        >
          {language === "FR" ? projects.fr : projects.en}
        </m.h1>

        <div className=" flex flex-grow flex-row lg:ml-36">
          <div className="font-cblight justify-center  flex flex-col  lg:justify-evenly  w-full text-3xl ">
            <m.button
              className="text-start lg:text-[10rem] flex-grow hover:font-pixelify  "
              type="button"
              onClick={() => navigate("works/mapping_art")}
            >
              {projects.mapping_art.name}
            </m.button>

            <m.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.19, delay: 0.16, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="text-start text-[10rem] lg:flex-grow   hover:font-kinfolk  "
              type="button"
              onClick={() => navigate("/works/dragoti")}
            >
              {projects.dragoti.name}
            </m.button>

            <m.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.19, delay: 0.16, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-start lg:flex-grow   text-[10rem] hover:font-cbnormal "
              type="button"
              onClick={() => navigate("/works/omega")}
            >
              {projects.omega.name}
            </m.button>
          </div>
        </div>
      </m.div>

      {/*    --------------*************---------------------  MASK       ---------------------------------------------------------- */}

      <m.div
        initial={{ opacity: 0 }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          opacity: 1,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
        className=" mask bg-gradient-to-bl from-fourth from-30% to-[#ccc095] hue-rotate-90   "
      >
        <h1 className="text-end  invert text-balance text-7xl lg:text-[12rem] font-kinfolk font-extralight mb-20 mt-5 underline decoration-2 ">
          {language === "FR" ? projects.fr : projects.en}
        </h1>
        {/* -----------------------------------------------------------------CONTENU ------------------------------------------ */}
        <div className=" flex flex-grow  invert  flex-row lg:ml-36">
          <div
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            className="font-cblight justify-center  flex flex-col  lg:justify-evenly   text-3xl "
          >
            <m.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.19, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="text-start  text-[10rem] flex-grow  hover:font-pixelify w-[80rem]  "
              type="button"
              onClick={() => navigate("/works/mapping_art")}
            >
              {projects.mapping_art.name}
            </m.button>

            <m.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.19, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="text-start text-[10rem] lg:flex-grow   hover:font-irishgrov  "
              type="button"
              onClick={() => navigate("/works/dragoti")}
            >
              {projects.dragoti.name}
            </m.button>

            <m.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.19, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-start lg:flex-grow   text-[10rem] hover:font-cbnormal "
              type="button"
              onClick={() => navigate("/works/omega")}
            >
              {projects.omega.name}
            </m.button>
          </div>
        </div>
      </m.div>
    </m.div>
  );
}
