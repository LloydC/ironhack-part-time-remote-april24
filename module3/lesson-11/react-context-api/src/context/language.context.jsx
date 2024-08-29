import { createContext, useState } from "react";
 
const LanguageContext = createContext(); // Context{}

function LanguageProviderWrapper(props) {
    const [currentLanguage, setCurrentLanguage] = useState("en")

    const changeLanguage = (languageSelected) => {
        setCurrentLanguage(languageSelected)
    }
    return (
      <LanguageContext.Provider value={{ default: 'en', currentLanguage, changeLanguage }}>
          {props.children}
      </LanguageContext.Provider>
    )
  }
   
  export { LanguageContext, LanguageProviderWrapper }; 