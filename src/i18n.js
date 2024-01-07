// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import amTranslations from './locales/am.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    am: { translation: amTranslations },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
