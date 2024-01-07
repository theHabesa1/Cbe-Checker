// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="space-x-4">
      <button
        onClick={() => changeLanguage('en')}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('am')}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
      >
        አማርኛ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
