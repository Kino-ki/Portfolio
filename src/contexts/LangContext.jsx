import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
// Création
const LanguageContext = createContext();

// Contenu
export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "FR"
  );
  useEffect(() => {
    if (language === "EN") {
      document.querySelector("#root").classList.add("EN");
    } else {
      document.querySelector("#root").classList.remove("EN");
    }
  }, [language]);

  const handleLanguageChange = () => {
    const currentLanguage = language === "FR" ? "EN" : "FR";
    setLanguage(currentLanguage);
    localStorage.setItem("language", currentLanguage);
  };

  const languageContextValues = useMemo(
    () => ({ language, handleLanguageChange }),
    [language, handleLanguageChange]
  );

  return (
    <LanguageContext.Provider value={languageContextValues}>
      {children}
    </LanguageContext.Provider>
  );
}

// Utilisation
export const useLanguage = () => useContext(LanguageContext);

LanguageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
