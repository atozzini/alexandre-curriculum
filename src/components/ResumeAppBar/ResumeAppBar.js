import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import LanguagePicker from '../../components/LanguagePicker/LanguagePicker';
import SocialNetworkNavigation from '../SocialNetworkNavigation/SocialNetworkNavigation';

const ResumeAppBar = ({ emailAddress, snsAccounts }) => (
  <AppBar className="ResumeAppBar" position="absolute">
    <Toolbar className="ResumeAppBar-header">
      <LanguagePicker />
      {emailAddress && <Button href={`mailto:${emailAddress}`}>{emailAddress}</Button>}
      <SocialNetworkNavigation services={snsAccounts || []} />
    </Toolbar>
  </AppBar>
);

ResumeAppBar.propTypes = {
  emailAddress: PropTypes.string,
  snsAccounts: PropTypes.array,
};

ResumeAppBar.defaultProps = {
  emailAddress: '',
  snsAccounts: [],
};

export default ResumeAppBar;
