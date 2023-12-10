// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Screens/About';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">TOZZINI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <div className="container">
              <h1 style={{ textAlign: 'center' }}>ALEXANDRE TOZZINI</h1>

              <Footer />
            </div>
          }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
