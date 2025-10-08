import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cvPT from '../../data/pt';
import cvDE from '../../data/de';
import cvEN from '../../data/en';
import cvPDFPT from '../../data/pt.pdf';
import cvPDFDE from '../../data/de.pdf';
import cvPDFEN from '../../data/en.pdf';
import Resume from '../Resume/Resume';

class ResumeScreen extends Component {
  componentWillMount() {
    this.setState({
      cvs: { pt: cvPT, de: cvDE, en: cvEN },
      cvPDFs: { pt: cvPDFPT, de: cvPDFDE, en: cvPDFEN },
    });
  }

  render() {
    const cv = this.state.cvs[this.props.currentLanguage];
    const cvPDF = this.state.cvPDFs[this.props.currentLanguage];
    return <Resume {...cv} cvPDF={cvPDF} />;
  }
}

ResumeScreen.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentLanguage: state.language.lang,
});

export default connect(mapStateToProps)(ResumeScreen);
