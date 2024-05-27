import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

const translations = {
  hello: {
    english: "Hello",
    marathi: "नमस्ते"
  },
  read_more: {
    english: "Read more",
    marathi: "अधिक वाचा"
  },
  show_less: {
    english: "Show less",
    marathi: "कमी दाखवा"
  },
  not_interested: {
    english: "Not Interested",
    marathi: "रस नाही"
  },
  refresh: {
    english: "Refresh",
    marathi: "रिफ्रेश"
  },
  no_tours_left: {
    english: "No Tours left",
    marathi: "कोणतीही पर्यटन शिल्लक नाही"
  },
  plan_with_friends:{
    english: "plane with friends",
    marathi: "मित्रांसह योजना"
  },
};

export const TranslationProvider = ({children}) => {
  const [language, setLanguage] = useState('english');

  const handleLangChange = () => {
    setLanguage(prevLanguage => prevLanguage === 'english' ? 'marathi' : 'english');
  }

  return (
    <TranslationContext.Provider value={{ language, translations, handleLangChange }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslations = () => {
  return  useContext(TranslationContext);
}