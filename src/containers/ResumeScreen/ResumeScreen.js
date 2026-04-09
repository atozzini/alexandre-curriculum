import React from 'react';
import PropTypes from 'prop-types';
import cvPT from '../../data/pt';
import cvDE from '../../data/de';
import cvEN from '../../data/en';
import cvIT from '../../data/it';
import cvPDFPT from '../../data/pt.pdf';
import cvPDFDE from '../../data/de.pdf';
import cvPDFEN from '../../data/en.pdf';
import cvPDFIT from '../../data/it.pdf';
import Resume from '../Resume/Resume';

const cvs = { pt: cvPT, de: cvDE, en: cvEN, it: cvIT };
const cvPDFs = { pt: cvPDFPT, de: cvPDFDE, en: cvPDFEN, it: cvPDFIT };

const ResumeScreen = ({ language }) => (
  <Resume {...cvs[language]} cvPDF={cvPDFs[language]} />
);

ResumeScreen.propTypes = {
  language: PropTypes.string.isRequired,
};

export default ResumeScreen;
