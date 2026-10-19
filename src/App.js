import React from 'react';
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

const languageByPath = {
  '/pt': 'pt',
  '/pt/cv.html': 'pt',
  '/de': 'de',
  '/de/lebenslauf.html': 'de',
  '/en': 'en',
  '/en/resume.html': 'en',
  '/it': 'it',
  '/it/curriculum.html': 'it',
};

// Wraps the whole Switch (including the 404 route) in a single IntlProvider,
// since `injectIntl` components crash without an intl context in the tree.
const App = () => (
  <BrowserRouter>
    <Route
      render={({ location }) => {
        const language = languageByPath[location.pathname] || defaultLanguage;

        return (
          <IntlProvider
            locale={language}
            key={language}
            messages={languages[language]}
          >
            <MuiThemeProvider theme={theme}>
              <div className="App">
                <Meta locale={language} />
                <Route path="/" component={Analytics} />
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <ResumeScreen language={language} />}
                  />
                  <Route
                    exact
                    path="/pt"
                    render={() => <ResumeScreen language="pt" />}
                  />
                  <Route
                    exact
                    path="/pt/cv.html"
                    render={() => <ResumeScreen language="pt" />}
                  />
                  <Route
                    exact
                    path="/de"
                    render={() => <ResumeScreen language="de" />}
                  />
                  <Route
                    exact
                    path="/de/lebenslauf.html"
                    render={() => <ResumeScreen language="de" />}
                  />
                  <Route
                    exact
                    path="/en"
                    render={() => <ResumeScreen language="en" />}
                  />
                  <Route
                    exact
                    path="/en/resume.html"
                    render={() => <ResumeScreen language="en" />}
                  />
                  <Route
                    exact
                    path="/it"
                    render={() => <ResumeScreen language="it" />}
                  />
                  <Route
                    exact
                    path="/it/curriculum.html"
                    render={() => <ResumeScreen language="it" />}
                  />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </MuiThemeProvider>
          </IntlProvider>
        );
      }}
    />
  </BrowserRouter>
);

export default App;
