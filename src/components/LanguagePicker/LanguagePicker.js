import React from 'react';
import { Link } from 'next/link';
import Button from '@mui/material/Button';
import languages from '../../i18n/languages.json';

const LanguagePicker = () => (
  <div className="LanguagePicker">
    {languages.map(language => (
      <Button
        className="LanguagePicker-button"
        key={language.name}
        component={Link}
        to={`/${language.url}.html`}
      >
        {language.name}
      </Button>
    ))}
  </div>
);

export default LanguagePicker;
