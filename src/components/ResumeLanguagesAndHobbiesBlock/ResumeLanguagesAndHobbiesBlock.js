import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Icon from '@mui/material/Icon';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import DotsProgress from '../../components/DotsProgress/DotsProgress';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

const ResumeLanguagesAndHobbiesBlock = ({
  languages,
  hobbies,
  hobbyCardStyle,
}) => (
  <ScreenBlock id="Resume-languages" className="ResumeLanguagesAndHobbiesBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage id="Resume.languages" defaultMessage="Languages" />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.languagesSubtitle"
            defaultMessage="I speak"
          />
        </p>
      </div>

      <div className="ResumeLanguagesAndHobbiesBlock-languages">
        {(languages || []).map((language) => (
          <div
            className="ResumeLanguagesAndHobbiesBlock-language"
            key={language?.name}
          >
            <div className="ResumeLanguagesAndHobbiesBlock-languageTitleAndLevel">
              <span className="ResumeLanguagesAndHobbiesBlock-languageTitle">
                {language?.name}
              </span>
              <br />
              <span className="ResumeLanguagesAndHobbiesBlock-languageLevel">
                {language?.level}
              </span>
            </div>
            <DotsProgress
              maxNumberOfDots={10}
              numberOfActiveDots={language?.levelNumber || 0}
            />
          </div>
        ))}
      </div>
    </div>

    <div id="Resume-hobbies">
      <div className="heading">
        <h2>
          <FormattedMessage id="Resume.interests" defaultMessage="Interests" />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.interestsSubtitle"
            defaultMessage="What I like"
          />
        </p>
      </div>
    </div>

    <div className="ResumeLanguagesAndHobbiesBlock-hobbies">
      {(hobbies || []).map((hobby) => (
        <div
          key={hobby?.name}
          className="ResumeLanguagesAndHobbiesBlock-hobby-container"
        >
          <div className="ResumeLanguagesAndHobbiesBlock-hobby">
            <Card
              style={hobbyCardStyle}
              className="ResumeLanguagesAndHobbiesBlock-hobby-front"
            >
              <CardContent>
                <Icon>{hobby?.icon}</Icon>
                <h4>{hobby?.name}</h4>
              </CardContent>
            </Card>
            <Card
              key={`${hobby?.name}-back`}
              style={hobbyCardStyle}
              className="ResumeLanguagesAndHobbiesBlock-hobby-back"
            >
              <CardContent>
                {hobby?.description && (
                  <div className="ResumeLanguagesAndHobbiesBlock-hobby-back-description">
                    {hobby.description}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  </ScreenBlock>
);

ResumeLanguagesAndHobbiesBlock.propTypes = {
  languages: PropTypes.array,
  hobbies: PropTypes.array,
  hobbyCardStyle: PropTypes.object.isRequired,
};

ResumeLanguagesAndHobbiesBlock.defaultProps = {
  languages: [],
  hobbies: [],
};

export default ResumeLanguagesAndHobbiesBlock;
