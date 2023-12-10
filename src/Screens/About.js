import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import Footer from '../Components/Footer';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>About!</h1>
        <Alert variant="warning">Haaaaa</Alert>
        <Footer />
      </div>
    );
  }
}

export default About;
