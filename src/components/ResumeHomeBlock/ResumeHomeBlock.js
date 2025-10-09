import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GridBackground from '../../components/GridBackground/GridBackground';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import appTheme from '../../theme';

import './ResumeHomeBlock.css';

export const ResumeHomeBlock = ({ style, shortFullName, headline }) => (
  <ScreenBlock id="Resume-home" style={style} className="ResumeHomeBlock">
    {/* Cabeçalho com nome e título */}
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

    {/* Fundo com ícones */}
    <div className="ResumeHomeBlock-squares">
      <GridBackground>
        {/* Stack principal */}
        <div style={appTheme.goColor.style}>{appTheme.goColor.icon}</div>
        <div style={appTheme.rubyColor.style}>{appTheme.rubyColor.icon}</div>
        <div style={appTheme.railsColor.style}>{appTheme.railsColor.icon}</div>
        <div style={appTheme.reactColor.style}>{appTheme.reactColor.icon}</div>
        <div style={appTheme.javascriptColor.style}>
          {appTheme.javascriptColor.icon}
        </div>

        {/* Banco de dados */}
        <div style={appTheme.postgresColor.style}>
          {appTheme.postgresColor.icon}
        </div>
        <div style={appTheme.oracleColor.style}>
          {appTheme.oracleColor.icon}
        </div>
        <div style={appTheme.mysqlColor.style}>{appTheme.mysqlColor.icon}</div>

        {/* Infraestrutura */}
        <div style={appTheme.dockerColor.style}>
          {appTheme.dockerColor.icon}
        </div>
        <div style={appTheme.nginxColor.style}>{appTheme.nginxColor.icon}</div>

        {/* Ferramentas */}
        <div style={appTheme.gitColor.style}>{appTheme.gitColor.icon}</div>
        <div style={appTheme.postmanColor.style}>
          {appTheme.postmanColor.icon}
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
  style: {},
};

export default ResumeHomeBlock;
