import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import appTheme from '../../theme';
import DatabaseIcon from '../../assets/icons/sql-svgrepo-com.svg';
import './ResumeSkillsBlock.css';

const ResumeSkillsBlock = ({ skills }) => {
  // Retorna metadados da categoria sem JSX em objetos
  const getCategoryData = categoryName => {
    if (!categoryName) {
      return {
        style: appTheme.othersColor.style,
        iconNode: appTheme.othersColor.icon,
        isDatabase: false,
      };
    }

    const normalized = String(categoryName || '').toLowerCase();

    // Categoria "Banco de Dados" (SQL, Database, etc.)
    if (
      normalized.indexOf('sql') !== -1 ||
      normalized.indexOf('database') !== -1
    ) {
      return {
        style: { background: '#444', color: '#fff' },
        iconSrc: DatabaseIcon, // fornecemos apenas o src
        isDatabase: true, // para renderizar com <FormattedMessage /> depois
      };
    }

    // Mapeia para os temas existentes
    let themeKey = null;
    const keys = Object.keys(appTheme);
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].toLowerCase().indexOf(normalized) !== -1) {
        themeKey = keys[i];
        break;
      }
    }

    if (themeKey && appTheme[themeKey]) {
      return {
        style: appTheme[themeKey].style,
        iconNode: appTheme[themeKey].icon, // já é um React element do theme
        isDatabase: false,
      };
    }

    return {
      style: appTheme.othersColor.style,
      iconNode: appTheme.othersColor.icon,
      isDatabase: false,
    };
  };

  return (
    <ScreenBlock id="Resume-skills" className="ResumeSkillsBlock">
      <div className="container">
        {/* Título principal */}
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

        {/* Lista de skills */}
        <div className="ResumeSkillsBlock-skills">
          {skills.map(skillCategory => {
            const language =
              (skillCategory &&
                skillCategory[0] &&
                skillCategory[0].language &&
                skillCategory[0].language.name) ||
              '';

            const meta = getCategoryData(language);
            const categoryKey = `${language}-${skillCategory.length}`;

            return (
              <Card key={categoryKey}>
                <CardContent>
                  <Avatar
                    style={{
                      background:
                        (meta.style && meta.style.background) || '#333',
                      color: (meta.style && meta.style.color) || '#fff',
                      width: 120,
                      height: 120,
                      margin: '0 auto 12px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Renderiza o ícone: via src (DB) ou via node do theme */}
                    {meta.iconSrc ? (
                      <img
                        src={meta.iconSrc}
                        alt="Database"
                        width="60"
                        height="60"
                        style={{
                          objectFit: 'contain',
                          filter: 'invert(1) brightness(1.2)',
                        }}
                      />
                    ) : (
                      meta.iconNode || null
                    )}
                  </Avatar>

                  {/* Título da categoria */}
                  <h3
                    style={{
                      color: '#000',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {meta.isDatabase ? (
                      <FormattedMessage
                        id="Resume.database"
                        defaultMessage="Database"
                      />
                    ) : (
                      language || 'Others'
                    )}
                  </h3>

                  {/* Lista de itens dentro da categoria */}
                  {skillCategory.map(skill => (
                    <div key={skill.name}>{skill.name}</div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <br />

        {/* Seção de ferramentas */}
        <div className="heading">
          <h2>
            <FormattedMessage id="Resume.tools" defaultMessage="Tools" />
          </h2>
          <p>
            <FormattedMessage
              id="Resume.toolsSubtitle"
              defaultMessage="Tools I use frequently in my workflow"
            />
          </p>
        </div>

        <div className="ResumeSkillsBlock-tools">
          <ul>
            <li>Docker & Docker Compose</li>
            <li>Git (GitHub, Bitbucket)</li>
            <li>VS Code</li>
            <li>Postman & Insomnia</li>
            <li>Jira, Trello, Notion</li>
            <li>Linux (Ubuntu, Debian, Manjaro)</li>
            <li>AWS (EC2, RDS)</li>
            <li>CI/CD & Automated Testing</li>
          </ul>
        </div>
      </div>
    </ScreenBlock>
  );
};

ResumeSkillsBlock.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default ResumeSkillsBlock;
