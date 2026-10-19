import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardMembershipIcon from '@material-ui/icons/CardMembership';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import appTheme from '../../theme';
import './ResumeCertificationsBlock.css';

const resolvePicture = picture => {
  if (!picture) return null;
  return picture.startsWith('/img/') ? picture : `/img/${picture}`;
};

const ResumeCertificationsBlock = ({ certifications }) => (
  <ScreenBlock id="Resume-certifications" className="ResumeCertificationsBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage
            id="Resume.certifications"
            defaultMessage="Certifications"
          />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.certificationsSubtitle"
            defaultMessage="Credentials I hold"
          />
        </p>
      </div>

      <div className="ResumeCertificationsBlock-list">
        {certifications.map(certification => {
          const picture = resolvePicture(certification.picture);

          const card = (
            <Card key={certification.name}>
              <CardContent>
                <Avatar
                  style={{
                    background: appTheme.othersColor.style.background,
                    color: appTheme.othersColor.style.color,
                    width: 80,
                    height: 80,
                    margin: '0 auto 12px',
                  }}
                >
                  {picture ? (
                    <img
                      src={picture}
                      alt=""
                      width="80"
                      height="80"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <CardMembershipIcon style={{ fontSize: 40 }} />
                  )}
                </Avatar>
                <h3>{certification.name}</h3>
                <p>
                  {certification.issuer}
                  {certification.year && ` · ${certification.year}`}
                </p>
                {certification.credentialId && (
                  <p className="ResumeCertificationsBlock-credentialId">
                    <FormattedMessage
                      id="Resume.credentialId"
                      defaultMessage="Credential ID"
                    />
                    : {certification.credentialId}
                  </p>
                )}
              </CardContent>
            </Card>
          );

          if (!certification.credentialUrl) {
            return card;
          }

          return (
            <a
              key={certification.name}
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ResumeCertificationsBlock-link"
            >
              {card}
            </a>
          );
        })}
      </div>
    </div>
  </ScreenBlock>
);

ResumeCertificationsBlock.propTypes = {
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      issuer: PropTypes.string,
      year: PropTypes.string,
      picture: PropTypes.string,
      credentialId: PropTypes.string,
      credentialUrl: PropTypes.string,
    }),
  ).isRequired,
};

export default ResumeCertificationsBlock;
