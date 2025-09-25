import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import appTheme from '../../theme';

const ResumeSkillsBlock = ({ skills, tools }) => (
  <ScreenBlock id="Resume-skills" className="ResumeSkillsBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage id="Resume.skills" defaultMessage="Skills" />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.skillsSubtitle"
            defaultMessage="I can say I’m quite good at"
          />
        </p>
      </div>

      <div className="ResumeSkillsBlock-skills">
        {(skills || []).map((skillCategory, i) => {
          const lang = skillCategory?.[0]?.language;
          const themeKey = lang?.style ? `${lang.style}Color` : null;
          const themeObj = themeKey ? appTheme[themeKey] : null;

          return (
            // eslint-disable-next-line react/no-array-index-key
            <Card key={i}>
              <CardContent>
                <Avatar
                  style={{
                    ...(themeObj?.style || {}),
                    width: 100,
                    height: 100,
                    margin: '0 auto',
                  }}
                >
                  {themeObj?.icon}
                </Avatar>
                <h3
                  style={{
                    color: themeObj?.style?.background || '#000',
                  }}
                >
                  {lang?.name || ''}
                </h3>
                {(skillCategory || []).map((skill, j) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={j}>{skill?.name || ''}</div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <br />

      <div className="heading">
        <h2>
          <FormattedMessage id="Resume.tools" defaultMessage="Tools" />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.toolsSubtitle"
            defaultMessage="My favorite tools"
          />
        </p>
      </div>

      <div className="ResumeSkillsBlock-tools">
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: tools || '' }} />
      </div>
    </div>
  </ScreenBlock>
);

ResumeSkillsBlock.propTypes = {
  skills: PropTypes.array,
  tools: PropTypes.string,
};

ResumeSkillsBlock.defaultProps = {
  skills: [],
  tools: '',
};

export default ResumeSkillsBlock;  // <-- garante o export default
