import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import VerticalTimeline from '../../components/VerticalTimeline/VerticalTimeline';
import VerticalTimelineElement from '../../components/VerticalTimelineElement/VerticalTimelineElement';
import ShowMore from '../../components/ShowMore/ShowMore';

const formatPeriod = (start, end, formatMessage) => {
  if (!start || !end) return '';
  const isToday = end === 'Today' || end === "Aujourd'hui" || end === '今';

  const period =
    (isToday ? new Date().getFullYear() : parseInt(end, 10)) -
    parseInt(start, 10);

  if (isNaN(period) || period <= 1) {
    return `${start} – ${end}`;
  }

  return `${start} – ${end} (${formatMessage(
    {
      id: 'Resume.years',
      defaultMessage:
        '{years, plural, =0 {0 year} one {# year} other {# years}}',
    },
    { years: period },
  )})`;
};

const ResumeWorkAndEducationBlock = ({
  positions = [],
  educations = [],
  workIconStyle,
  educationIconStyle,
  formatMessage,
}) => (
  <ScreenBlock id="Resume-work" className="ResumeWorkAndEducationBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage
            id="Resume.workExperienceAndEducation"
            defaultMessage="Work experience & Education"
          />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.workExperienceAndEducationSubtitle"
            defaultMessage="My previous jobs and my qualifications."
          />
        </p>
      </div>

      <VerticalTimeline>
        {(positions || []).map((position, i) => {
          const picture = position?.picture ? `/img/${position.picture}` : null;

          return (
            <VerticalTimelineElement
              className="Resume-position"
              key={i}
              icon={<WorkIcon />}
              iconStyle={workIconStyle}
              date={formatPeriod(
                position?.startDate,
                position?.endDate,
                formatMessage,
              )}
            >
              {picture && (
                <img
                  className="ResumeWorkAndEducationBlock-picture"
                  alt={position?.company || ''}
                  src={picture}
                />
              )}
              <h3 className="vertical-timeline-element-title">
                {position?.title || ''} @{position?.company || ''}
              </h3>
              {Array.isArray(position?.keywords) && (
                <div className="ResumeWorkAndEducationBlock-keywords">
                  {position.keywords.map((keyword, j) => (
                    <span key={j}>{keyword?.name || ''}</span>
                  ))}
                </div>
              )}
              {position?.summary && (
                <p>
                  <span
                    dangerouslySetInnerHTML={{ __html: position.summary }}
                  />
                </p>
              )}
              {position?.more && (
                <ShowMore>
                  <p dangerouslySetInnerHTML={{ __html: position.more }} />
                </ShowMore>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

      <div id="Resume-education">
        <VerticalTimeline>
          {(educations || []).map((education, i) => (
            <VerticalTimelineElement
              position={i % 2 ? 'left' : 'right'}
              className="Resume-position"
              key={i}
              icon={<SchoolIcon />}
              iconStyle={educationIconStyle}
              date={formatPeriod(
                education?.startDate,
                education?.endDate,
                formatMessage,
              )}
            >
              <h3 className="vertical-timeline-element-title">
                {education?.fieldOfStudy || ''}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {education?.degree || ''}
              </h4>

              {education?.activities &&
                !Array.isArray(education.activities) && (
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: education.activities,
                      }}
                    />
                  </p>
                )}

              {Array.isArray(education?.activities) && (
                <div className="ResumeWorkAndEducationBlock-keywords">
                  {education.activities.map((activity, j) => (
                    <span key={j}>{activity?.name || ''}</span>
                  ))}
                </div>
              )}

              {education?.summary && (
                <p
                  dangerouslySetInnerHTML={{ __html: education.summary }}
                />
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  </ScreenBlock>
);

ResumeWorkAndEducationBlock.propTypes = {
  workIconStyle: PropTypes.object.isRequired,
  educationIconStyle: PropTypes.object.isRequired,
  positions: PropTypes.array,
  educations: PropTypes.array,
  formatMessage: PropTypes.func.isRequired,
};

ResumeWorkAndEducationBlock.defaultProps = {
  positions: [],
  educations: [],
};

export default ResumeWorkAndEducationBlock;
