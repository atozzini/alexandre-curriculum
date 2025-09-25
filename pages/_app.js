// pages/_app.js
import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../src/muiTheme';
import customTheme from '../src/theme'; // seu tema de cores personalizadas
import 'react-vertical-timeline-component/style.min.css';

// importa traduções
import enMessages from '../src/i18n/en';
import deMessages from '../src/i18n/de';
import ptMessages from '../src/i18n/pt';
import itMessages from '../src/i18n/it';

// estilos globais
import '../styles/BottomNavigation.css';
import '../styles/DotsProgress.css';
import '../styles/FadeTransition.css';
import '../styles/LanguagePicker.css';
import '../styles/ResumeAboutMeBlock.css';
import '../styles/ResumeAppBar.css';
import '../styles/ResumeHomeBlock.css';
import '../styles/ResumeLanguagesAndHobbiesBlock.css';
import '../styles/ResumeSkillsBlock.css';
import '../styles/ResumeWorkAndEducationBlock.css';
import '../styles/ScreenBlock.css';
import '../styles/ShowMore.css';
import '../styles/SocialNetworkNavigation.css';
import '../styles/VerticalTimeline.css';
import '../styles/VerticalTimelineElement.css';
import '../styles/Resume.css';
import '../styles/NotFound.css';

const messages = {
  en: enMessages,
  de: deMessages,
  pt: ptMessages,
  it: itMessages,
};

function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      if (messages[browserLang]) {
        setLocale(browserLang);
      }
    }
  }, []);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale] || messages.en}
      defaultLocale="en"
    >
      <ThemeProvider theme={muiTheme}>
        {/* 🔑 Passa o customTheme para todas as páginas */}
        <Component {...pageProps} customTheme={customTheme} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
