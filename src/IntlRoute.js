import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'next/link';

const IntlRoute = ({
  language,
  component: Component,
  onChangeLanguage,
  ...rest
}) => (
  <Route
    {...rest}
    render={() => {
      onChangeLanguage(language);
      return <Component language={language} />;
    }}
  />
);

IntlRoute.propTypes = {
  language: PropTypes.string,
  component: PropTypes.any,
  onChangeLanguage: PropTypes.func,
};

export default IntlRoute;
