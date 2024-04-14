import { NavLink } from "react-router-dom";
import * as t from "../translations.json";
import { AnimatePresence, motion as m } from "framer-motion";
import PropTypes from "prop-types";

import { useLanguage } from "../contexts/LangContext";
export default function NavBar({ location }) {
  const { language } = useLanguage();
  const { navbar } = t;

  return (
    <AnimatePresence>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        exit={{ opacity: 0, duration: 0.5 }}
        className={`min-h-screen w-26 backdrop-blur-[4px]  ${
          location === "/works/omega" && "text-white bg-black"
        } ${
          location === "/works/dragoti" && "backdrop-blur-[8.5px] text-white "
        } fixed top-0 flex flex-col justify-between z-10  border-r border-black `}
      >
        <div className=" flex flex-col text-nowrap font-cbnormal lg:text-xl lg:justify-evenly lg:gap-28 gap-16  mt-14  ">
          <NavLink to="/" className="rotate-[270deg] hover:invert ">
            {" "}
            {language === "FR" ? navbar.home.fr : navbar.home.en}
            {"  "}
          </NavLink>
          <NavLink to="/works" className="rotate-[270deg]  hover:invert ">
            {language === "FR" ? navbar.works.fr : navbar.works.en}{" "}
          </NavLink>
          <NavLink to="/about" className="rotate-[270deg]  hover:invert ">
            {language === "FR" ? navbar.about.fr : navbar.about.en}{" "}
          </NavLink>
          <NavLink to="/contact" className="rotate-[270deg]  hover:invert">
            {" "}
            CONTACT
          </NavLink>
        </div>

      </m.div>
    </AnimatePresence>
  );
}

NavBar.propTypes = {
  location: PropTypes.string.isRequired,
};
