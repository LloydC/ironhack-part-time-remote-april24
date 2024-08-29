import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import { LanguageContext } from "../context/language.context";
import content from '../translations.json'

const profileImg = 'https://i.imgur.com/i1gsj0v.png';
 
function HomePage() {
    const{ theme } = useContext(ThemeContext)
    const { currentLanguage } = useContext(LanguageContext)

  return (
    <div className={`HomePage ${theme}`}>
      <h1>{content[0][currentLanguage].homePage.pageTitle}</h1>
      <img src={profileImg} className="profile" alt="profile" />
    </div>
  );
}
 
export default HomePage;