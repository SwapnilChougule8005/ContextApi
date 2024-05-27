import React from 'react';
import { useTranslations } from './TranslationContext';

const SwitchLanguage = () => {
  const { handleLangChange, language, translations } = useTranslations();

  return (
    <div className="language-switcher">
      <p>{translations.hello[language]}</p>
      <button onClick={handleLangChange}>
        {language === 'english' ? "English" : "मराठी"}
      </button>
    </div>
  )
};

export default SwitchLanguage;