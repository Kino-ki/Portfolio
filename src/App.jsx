import { Outlet, useLocation } from "react-router-dom";
import { LanguageContextProvider } from "./contexts/LangContext";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import NavBar from "./Components/NavBar";
import LangButton from "./Components/LangButton";

export default function App() {
  let location = useLocation().pathname;

  const excludedRoute = "/";

  return (
    <div className="bg-slate-100">
      <LanguageContextProvider>
        {location !== excludedRoute && <NavBar location={location} />}
        <ParallaxProvider>
          <AnimatePresence mode="wait">
            <Outlet key={{ location }} />
            <LangButton location={location}/>
          </AnimatePresence>
        </ParallaxProvider>
      </LanguageContextProvider>
    </div>
  );
}
