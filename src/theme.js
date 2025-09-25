// src/theme.js
import React from 'react';

import { SiPostgresql, SiOracle, SiMysql, SiDocker, SiReact, SiRuby, SiJavascript, SiGo, SiLinux, SiGithub } from 'react-icons/si';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const theme = {
  goColor: {
    style: { background: '#6AD7E5', color: '#fff' },
    className: 'vertical-timeline-element--go',
    icon: <SiGo />,
  },
  rubyColor: {
    style: { background: '#CC342D', color: '#fff' },
    className: 'vertical-timeline-element--ruby',
    icon: <SiRuby />,
  },
  railsColor: {
    style: { background: '#A62C46', color: '#fff' },
    className: 'vertical-timeline-element--rails',
    icon: <SiRuby />, // pode trocar por outro, mas Rails não tem ícone próprio
  },
  reactColor: {
    style: { background: '#282c34', color: '#61DAFB' },
    className: 'vertical-timeline-element--react',
    icon: <SiReact />,
  },
  javascriptColor: {
    style: { background: '#323330', color: '#F7DF1E' },
    className: 'vertical-timeline-element--javascript',
    icon: <SiJavascript />,
  },
  dockerColor: {
    style: { background: '#384d54', color: '#0db7ed' },
    className: 'vertical-timeline-element--docker',
    icon: <SiDocker />,
  },
  postgresColor: {
    style: { background: '#336791', color: '#fff' },
    className: 'vertical-timeline-element--postgres',
    icon: <SiPostgresql />,
  },
  oracleColor: {
    style: { background: '#F80000', color: '#fff' },
    className: 'vertical-timeline-element--oracle',
    icon: <SiOracle />,
  },
  mysqlColor: {
    style: { background: '#00758F', color: '#fff' },
    className: 'vertical-timeline-element--mysql',
    icon: <SiMysql />,
  },
  linuxColor: {
    style: { background: '#333333', color: '#FCC624' },
    className: 'vertical-timeline-element--linux',
    icon: <SiLinux />,
  },
  githubColor: {
    style: { background: '#24292f', color: '#fff' },
    className: 'vertical-timeline-element--github',
    icon: <SiGithub />,
  },
  othersColor: {
    style: { background: '#555555', color: '#fff' },
    className: 'vertical-timeline-element--others',
    icon: <MoreHorizIcon />,
  },
  resumeColor: {
    style: { background: '#1e1e1e', color: '#f5f5f5' },
    className: 'vertical-timeline-element--resume',
    icon: <MoreHorizIcon />,
  },
};

export default theme;
