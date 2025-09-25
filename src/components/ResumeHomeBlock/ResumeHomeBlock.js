import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GridBackground from '../../components/GridBackground/GridBackground';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import appTheme from '../../theme';

export const ResumeHomeBlock = ({ style, shortFullName, headline }) => (
  <ScreenBlock id="Resume-home" style={style} className="ResumeHomeBlock">
    <div className="ResumeHomeBlock-headline-container">
      <div className="ResumeHomeBlock-headline">
        <h1>
          <FormattedMessage
            id="Resume.im"
            defaultMessage="{fullName}"
            values={{ fullName: shortFullName }}
          />
        </h1>
        <h2>{headline}</h2>
      </div>
    </div>

    <div className="ResumeHomeBlock-squares">
      <GridBackground>
        <div style={{ ...appTheme.reactColor.style }}>
          {appTheme.reactColor.icon}
        </div>
        <div style={{ ...appTheme.rubyColor.style }}>
          {appTheme.rubyColor.icon}
        </div>
        <div style={{ ...appTheme.javascriptColor.style }}>
          {appTheme.javascriptColor.icon}
        </div>
        <div style={{ ...appTheme.dockerColor.style }}>
          {appTheme.dockerColor.icon}
        </div>
        <div style={{ ...appTheme.postgresColor.style }}>
          {appTheme.postgresColor.icon}
        </div>
        <div style={{ ...appTheme.oracleColor.style }}>
          {appTheme.oracleColor.icon}
        </div>
        <div style={{ ...appTheme.mysqlColor.style }}>
          {appTheme.mysqlColor.icon}
        </div>
        <div style={{ ...appTheme.linuxColor.style }}>
          {appTheme.linuxColor.icon}
        </div>
        <div style={{ ...appTheme.githubColor.style }}>
          {appTheme.githubColor.icon}
        </div>
      </GridBackground>
    </div>
  </ScreenBlock>
);

ResumeHomeBlock.propTypes = {
  headline: PropTypes.string.isRequired,
  shortFullName: PropTypes.string.isRequired,
  style: PropTypes.object,
};

ResumeHomeBlock.defaultProps = {
  style: { background: '#1e1e1e', color: '#f5f5f5' }, // dark mode
};

export default ResumeHomeBlock;
