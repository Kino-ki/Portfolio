import { useLocation } from "react-router-dom";
import html from "../assets/images/logo/htmlLogo.png";
import css from "../assets/images/logo/cssLogo.png";
import tailwind from "../assets/images/logo/tailwindLogo.png";
import js from "../assets/images/logo/jsLogo.png";
import sql from "../assets/images/logo/mysqlLogo.png";
import react from "../assets/images/logo/reactLogo.png";

export default function TechLogos() {
  let location = useLocation().pathname;

  const excludedRoutes = ["/works/dragoti"];
  return (
    <div className="flex justify-evenly pb-5 w-fit items-center ">
      <div className=" w-[40%] flex justify-center">
        {excludedRoutes.includes(location) === false && (
          <img src={react} alt="react" className=" pointer-events-none " />
        )}
      </div>
      <div className="h-fit flex justify-center w-[40%]">
        <img src={html} alt="html" className="  pointer-events-none " />
      </div>
      <div className=" flex justify-center w-[35%] ">
        <img src={css} alt="css" className=" pointer-events-none " />
      </div>
      <div className=" flex justify-center w-[60%] ">
        <img src={js} alt="js" className=" pointer-events-none " />
      </div>
      <div className="flex justify-center w-[54%]">
        {excludedRoutes.includes(location) === false && (
          <img
            src={tailwind}
            alt="tailwind"
            className="  pointer-events-none  "
          />
        )}
      </div>
      <div className="  flex justify-center w-[50%] ">
        {excludedRoutes.includes(location) === false && (
          <img src={sql} alt="sql" className=" pointer-events-none  " />
        )}
      </div>
    </div>
  );
}
