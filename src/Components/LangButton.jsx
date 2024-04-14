import { useLanguage } from "../contexts/LangContext";
import { motion as m } from "framer-motion";
import PropTypes from "prop-types";

export default function LangButton({ location }) {
  const { language, handleLanguageChange } = useLanguage();
  return (
    <m.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
      alt="langague_btn"
      className={`lg:bottom-16  bottom-8 ${
        (location === "/works/omega" || location === "/works/dragoti") && "text-white"
      }  fixed left-10 z-20`}
      onClick={handleLanguageChange}
    >
      <div className="font-semibold">{language === "EN" ? "FR" : "EN"}</div>
    </m.button>
  );
}

LangButton.propTypes = {
  location: PropTypes.string.isRequired,
};
