import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import de from 'react-intl/locale-data/de';
import it from 'react-intl/locale-data/it';

import languages from './i18n';
import './App.css';

import Analytics from './components/Analytics/Analytics';
import NotFound from './containers/NotFound/NotFound';
import ResumeScreen from './containers/ResumeScreen/ResumeScreen';
import Meta from './containers/Meta/Meta';

addLocaleData([...en, ...pt, ...de, ...it]);

const theme = createMuiTheme({
  palette: {
    primary: blue,
    error: red,
  },
});

const defaultLanguage = process.env.REACT_APP_LOCALE || 'pt';

const LocaleApp = ({ language }) => (
  <IntlProvider locale={language} key={language} messages={languages[language]}>
    <div className="App">
      <Meta locale={language} />
      <Route path="/" component={Analytics} />
      <ResumeScreen language={language} />
    </div>
  </IntlProvider>
);

LocaleApp.propTypes = {
  language: PropTypes.string.isRequired,
};

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <LocaleApp language={defaultLanguage} />}
        />
        <Route
          exact
          path="/pt/cv.html"
          render={() => <LocaleApp language="pt" />}
        />
        <Route
          exact
          path="/de/lebenslauf.html"
          render={() => <LocaleApp language="de" />}
        />
        <Route
          exact
          path="/en/resume.html"
          render={() => <LocaleApp language="en" />}
        />
        <Route
          exact
          path="/it/curriculum.html"
          render={() => <LocaleApp language="it" />}
        />
        <Route component={NotFound} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
