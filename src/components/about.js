import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.png" alt="Scott Whitney in a contemplative pose" />
            </div>
            <div className="nine columns main-col">
              <h2>About me</h2>
              <p>
                It's always difficult to sum up the question "Who is...?" in a few words.
                Human value and lives are so much more than our skills and activities, but here's a summary of some of my abilities and passions:
              </p>
              <p>
                I am:
              </p>
              <p>
                A proficient {resumeData.proficient}{' '} with a passion for {resumeData.enthusiasm}. 
              </p>
              <p>
                During my career as a professor in Deaf Education, I developed a wealth of web
                and app development experience while {resumeData.experience}.
              </p>
              <p>
                Through my experience I learned that in the midst of an
                increasingly technological world, the most important thing is{' '}
                {resumeData.priority}. The driving force behind my ambitious
                projects is {resumeData.drivingForce}.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    {resumeData.firstName} {resumeData.lastName}
                    <br />
                    {resumeData.address} {resumeData.street} <br />
                    {resumeData.city}, {resumeData.state} {resumeData.zipcode}
                    <br />
                    <span>(936) 462-7579</span>
                    <br />
                    <span>{resumeData.email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="https://www.linkedin.com/in/scott-whitney/" className="button">
                      <i className="fa fa-linkedin" />
                      View LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
