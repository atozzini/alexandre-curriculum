import React, { Component } from 'react';
import Head from 'next/head';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import ResumeAppBar from '../../components/ResumeAppBar/ResumeAppBar';
import ResumeHomeBlock from '../../components/ResumeHomeBlock/ResumeHomeBlock';
import ResumeAboutMeBlock from '../../components/ResumeAboutMeBlock/ResumeAboutMeBlock';
import ResumeWorkAndEducationBlock from '../../components/ResumeWorkAndEducationBlock/ResumeWorkAndEducationBlock';
import ResumeSkillsBlock from '../../components/ResumeSkillsBlock/ResumeSkillsBlock';
import ResumeLanguagesAndHobbiesBlock from '../../components/ResumeLanguagesAndHobbiesBlock/ResumeLanguagesAndHobbiesBlock';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';

class Resume extends Component {
  getSkillsByLanguages() {
    const { skills } = this.props;
    if (!Array.isArray(skills)) return [];

    const skillsByLanguages = skills.reduce((obj, item) => {
      const newObj = obj;
      if (item?.language?.name) {
        newObj[item.language.name] = newObj[item.language.name] || [];
        newObj[item.language.name].push(item);
      }
      return newObj;
    }, {});

    return Object.keys(skillsByLanguages).map((key) => skillsByLanguages[key]);
  }

  render() {
    const {
      firstName,
      lastName,
      firstNameKana,
      lastNameKana,
      cvPDF,
      meta,
      intl,
      customTheme,
      positions,
      educations,
      skills,
      languages,
      hobbies,
      tools,
    } = this.props;

    let fullName = `${firstName || ''} ${lastName || ''}`;
    let shortFullName = fullName;
    if (firstNameKana) {
      shortFullName = `${firstNameKana}${lastNameKana || ''}`;
      fullName += ` (${firstNameKana}${lastNameKana || ''})`;
    }

    const theme =
      this.props.theme || {
        palette: {
          mode: 'light',
          primary: { main: '#000' },
          secondary: { main: '#fff' },
        },
      };

    const { formatMessage } = intl;

    const primaryColor = theme?.palette?.primary?.main || '#000';
    const secondaryColor = theme?.palette?.secondary?.main || '#fff';

    const groupedSkills = this.getSkillsByLanguages();

    const styles = {
      primaryColor: { background: primaryColor, color: '#fff' },
      secondaryColor: { background: secondaryColor, color: '#fff' },
    };

    return (
      <div className="Resume">
        <Head>
          <title>{meta?.title || 'Resume'}</title>
          <meta name="description" content={meta?.description || ''} />
          <meta name="keywords" content={meta?.keywords || ''} />
          <meta property="og:title" content={meta?.title || ''} />
          <meta property="twitter:title" content={meta?.title || ''} />
          <meta property="og:description" content={meta?.description || ''} />
        </Head>

        <ResumeAppBar
          emailAddress={this.props.emailAddress}
          snsAccounts={this.props.snsAccounts}
        />

        <ResumeHomeBlock
          shortFullName={shortFullName}
          headline={this.props.headline}
          style={customTheme?.resumeColor?.style || {}}
        />

        <ResumeAboutMeBlock
          fullName={fullName}
          headline={this.props.headline}
          summary={this.props.summary}
          pictureUrl={this.props.pictureUrl}
          resumeUrl={cvPDF}
          style={customTheme?.resumeColor?.style || {}}
        />

        <ResumeWorkAndEducationBlock
          workIconStyle={styles.primaryColor}
          educationIconStyle={styles.secondaryColor}
          positions={positions || []}
          educations={educations || []}
          formatMessage={formatMessage}
        />

        <ResumeSkillsBlock skills={groupedSkills || []} tools={tools || ''} />

        <ResumeLanguagesAndHobbiesBlock
          languages={languages || []}
          hobbies={hobbies || []}
          hobbyCardStyle={styles.primaryColor}
        />

        <BottomNavigation />
      </div>
    );
  }
}

Resume.propTypes = {
  theme: PropTypes.object,
  customTheme: PropTypes.object.isRequired,
  meta: PropTypes.object,
  intl: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  firstNameKana: PropTypes.string,
  lastName: PropTypes.string,
  lastNameKana: PropTypes.string,
  emailAddress: PropTypes.string,
  headline: PropTypes.string,
  summary: PropTypes.string,
  pictureUrl: PropTypes.string,
  snsAccounts: PropTypes.arrayOf(PropTypes.object),
  positions: PropTypes.arrayOf(PropTypes.object),
  languages: PropTypes.arrayOf(PropTypes.object),
  skills: PropTypes.arrayOf(PropTypes.object),
  educations: PropTypes.arrayOf(PropTypes.object),
  hobbies: PropTypes.arrayOf(PropTypes.object),
  customers: PropTypes.arrayOf(PropTypes.object),
  projects: PropTypes.arrayOf(PropTypes.object),
  cvPDF: PropTypes.string,
  tools: PropTypes.string,
};

Resume.defaultProps = {
  firstName: 'Alexandre',
  lastName: 'Tozzini',
  emailAddress: 'alexandretozzini@gmail.com',
  headline: 'Full-stack software engineer',
  summary:
    '♥ Microservice architecture lover ♥<br>Experienced Chief Technology Officer, Developer & Teacher...',
  pictureUrl: '',
  positions: [],
  languages: [],
  skills: [],
  educations: [],
  hobbies: [],
  customers: [],
  projects: [],
  meta: {
    title: 'Resume - Alexandre Tozzini',
    description: 'Full-stack software engineer Resume',
    keywords: 'developer, software, resume',
  },
};

export default injectIntl(Resume);
