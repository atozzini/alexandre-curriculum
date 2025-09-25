import React from 'react';
import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const icons = {
  github: { element: <FaGithub /> },
  linkedin: { element: <FaLinkedin /> },
};

const SocialNetworkNavigation = ({ services }) => (
  <div className="SocialNetworkNavigation">
    {(services || []).map((service) => (
      <a
        target="_blank"
        rel="noreferrer"
        key={service?.url}
        className={`SocialNetworkNavigation-link social-${service?.icon}`}
        href={service?.url}
      >
        {icons[service?.icon]?.element}
      </a>
    ))}
  </div>
);

SocialNetworkNavigation.propTypes = {
  services: PropTypes.array,
};

SocialNetworkNavigation.defaultProps = {
  services: [],
};

export default SocialNetworkNavigation;
