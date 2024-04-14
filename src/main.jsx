import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
import HomePage from "./Pages/HomePage.jsx";
import App from "./App.jsx";
import WorksPage from "./Pages/WorksPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import "./index.css";
import MappingArtPage from "./Pages/MappingArtPage.jsx";
import DragotiPage from "./Pages/DragotiPage.jsx";
import OmegaPage from "./Pages/OmegaPage.jsx";
// import { LanguageContextProvider } from "./contexts/LangContext.jsx";

const router = createBrowserRouter([
  {
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/works",
        element: <WorksPage />,
      },

      {
        path: "works/mapping_art",
        element: <MappingArtPage />,
      },
      {
        path: "works/dragoti",
        element: <DragotiPage />,
      },
      {
        path: "works/omega",
        element: <OmegaPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
