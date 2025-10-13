import React from 'react';
import DockerIcon from './assets/icons/docker-plain.svg';
import GitIcon from './assets/icons/git-original.svg';
import GoIcon from './assets/icons/go-original.svg';
import JavascriptIcon from './assets/icons/javascript-original.svg';
import MySQLIcon from './assets/icons/mysql-original.svg';
import NginxIcon from './assets/icons/nginx-original.svg';
import OracleIcon from './assets/icons/oracle-original.svg';
import PostgresIcon from './assets/icons/postgresql-original.svg';
import PostmanIcon from './assets/icons/postman-original.svg';
import RailsIcon from './assets/icons/rails-plain.svg';
import ReactIcon from './assets/icons/react-original.svg';
import RubyIcon from './assets/icons/ruby-plain.svg';
import PythonIcon from './assets/icons/python-original.svg';

const makeIconTheme = (background, icon, label) => ({
  style: {
    background,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: (
    <img
      src={icon}
      alt={label}
      width="36"
      height="36"
      style={{
        filter: 'brightness(1.1) contrast(1.1)',
        objectFit: 'contain',
      }}
    />
  ),
});

const theme = {
  goColor: makeIconTheme('#003f4f', GoIcon, 'Go'),
  pythonColor: makeIconTheme('#1a3559', PythonIcon, 'Python'),
  rubyColor: makeIconTheme('#4b0000', RubyIcon, 'Ruby'),
  railsColor: makeIconTheme('#651929', RailsIcon, 'Ruby on Rails'),
  reactColor: makeIconTheme('#111', ReactIcon, 'React'),
  javascriptColor: makeIconTheme('#f5c400', JavascriptIcon, 'JavaScript'),
  dockerColor: makeIconTheme('#0b253a', DockerIcon, 'Docker'),
  gitColor: makeIconTheme('#2b0c00', GitIcon, 'Git'),
  mysqlColor: makeIconTheme('#004b5c', MySQLIcon, 'MySQL'),
  postgresColor: makeIconTheme('#1a2b4a', PostgresIcon, 'PostgreSQL'),
  oracleColor: makeIconTheme('#440000', OracleIcon, 'Oracle'),
  nginxColor: makeIconTheme('#003f24', NginxIcon, 'Nginx'),
  postmanColor: makeIconTheme('#3b1a00', PostmanIcon, 'Postman'),

  othersColor: {
    style: { background: '#333', color: '#fff' },
    icon: <span style={{ fontSize: 22 }}>⋯</span>,
  },
};

export default theme;
