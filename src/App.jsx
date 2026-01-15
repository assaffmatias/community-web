import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import PATHROUTES from "./helpers/PathRoutes"
import Home from "./views/Home"
import Navbar from "./components/Navbar/Navbar"
import About from "./views/About"

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? saved === "true" : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  console.log(darkMode);


  return (
    <>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Routes>
        <Route path={PATHROUTES.HOME} element={<Home />} />
        <Route path={PATHROUTES.ABOUT} element={<About />} />
      </Routes>
    </>
  )
}

export default App
