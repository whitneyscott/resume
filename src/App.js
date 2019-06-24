import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Testimonials from './components/testimonials';
import ContactUs from './components/contactus';
import Footer from './components/footer';
import axios from 'axios';

import resumeData from './resumeData';

class App extends Component {
  state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
