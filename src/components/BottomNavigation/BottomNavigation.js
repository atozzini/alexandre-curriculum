import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '@mui/material/BottomNavigation';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import FaceIcon from '@mui/icons-material/Face';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/SettingsApplications';
import LanguageIcon from '@mui/icons-material/Language';
import ToysIcon from '@mui/icons-material/Toys';



const Link = props => {
  const { showLabel, ...rest } = props;
  return <Scroll.Link {...rest} />;
};

Link.propTypes = {
  showLabel: PropTypes.bool,
};

const buttons = [
  {
    label: 'SimpleBottomNavigation.home',
    name: 'Resume-home',
    icon: <HomeIcon />,
  },
  {
    label: 'SimpleBottomNavigation.aboutMe',
    name: 'Resume-aboutMe',
    icon: <FaceIcon />,
  },
  {
    label: 'SimpleBottomNavigation.workExperience',
    name: 'Resume-work',
    icon: <WorkIcon />,
  },
  {
    label: 'SimpleBottomNavigation.education',
    name: 'Resume-education',
    icon: <SchoolIcon />,
    offset: -16,
  },
  {
    label: 'SimpleBottomNavigation.skills',
    name: 'Resume-skills',
    icon: <SettingsIcon />,
  },
  {
    label: 'SimpleBottomNavigation.languages',
    name: 'Resume-languages',
    icon: <LanguageIcon />,
  },
  {
    label: 'SimpleBottomNavigation.hobbies',
    name: 'Resume-hobbies',
    icon: <ToysIcon />,
  },
];

const SimpleBottomNavigation = () => (
  <BottomNavigation value="0" className="BottomNavigation">
    {buttons.map((button, j) => (
      <Link
        key={j} // eslint-disable-line react/no-array-index-key
        className="BottomNavigation-link"
        to={button.name}
        activeClass="active"
        spy
        smooth
        offset={button.offset}
        duration={500}
      >
        {button.icon}
        <FormattedMessage id={button.label} />
      </Link>
    ))}
  </BottomNavigation>
);

export default SimpleBottomNavigation;
