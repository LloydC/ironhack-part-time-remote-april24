import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import { LanguageContext } from "../context/language.context";
import { NavLink } from "react-router-dom";
 
function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { changeLanguage } = useContext(LanguageContext)
    console.log('theme', theme)

  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "dark " : "light "}
      </button>
      <select name="language" onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">english</option>
        <option value="fr">francais</option>
      </select>
    </nav>
  );
}
 
export default Navbar;