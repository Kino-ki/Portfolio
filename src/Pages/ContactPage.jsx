import { AnimatePresence, motion as m } from "framer-motion";
import { useLanguage } from "../contexts/LangContext";
import { contact } from "../translations.json";

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="min-w-screen h-screen bg-[#e3e5a9]">
      <AnimatePresence>
        <m.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ y: "-100%", duration: 0.75 }}
          key={2}
          className=" p-5 bg-gradient-to-bl from-third from-75% to-[#f4e996] min-h-screen absolute top-0 left-0 w-full flex flex-col lg:ml-0 "
        >
          <m.h1
            initial={{ x: "70%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.75, delay:0.5 , ease: "backOut" }}
            exit={{ y: "-100%", duration: 0.75 }}
            className="text-end text-balance md:text-[12rem] text-7xl font-kinfolk font-extralight mb-20  mt-10  ml-8 underline decoration-2"
          >
            CONTACT
          </m.h1>
          <AnimatePresence>
            <m.div

              key={5}
              className="flex flex-col h-[30rem] justify-center  ml-28 mr-3 lg:mr-0"
            >
              <div className=" text-pretty font-cbnormal w-[30%] text-2xl overflow-hidden  ">
                <m.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 1.2, ease: "backOut" }}
                  className="flex flex-col text-end  rounded-md backdrop-blur-xl p-7  "
                >
                  {language === "FR"
                    ? contact.fr.split("\n").map((s, index) => (
                        <p className=" " key={index}>
                          {s}
                        </p>
                      ))
                    : contact.en.split("\n").map((s, index) => (
                        <p className="  " key={index}>
                          {s}
                        </p>
                      ))}
                  <address className="mt-10 flex flex-col gap-2">
                    <p className="font-semibold">
                      Email:{" "}
                      <a
                        className="hover:underline font-normal"
                        href="mailto:faiza>fehri@gmail.com"
                      >
                        faiza.fehri@gmail.com{" "}
                      </a>
                    </p>
                    {language === "FR" ? "ou:" : "or:"}
                    <a
                      className="hover:underline hover:italic"
                      href="https://www.linkedin.com/in/faiza-fehri/"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="hover:underline hover:italic"
                      href="https://www.linkedin.com/in/faiza-fehri/"
                    >
                      Github
                    </a>
                  </address>
                </m.div>
              </div>
            </m.div>
          </AnimatePresence>
        </m.div>
      </AnimatePresence>
    </div>
  );
}
