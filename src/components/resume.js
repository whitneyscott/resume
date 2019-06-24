import React, { Component } from 'react';
export default class Resume extends Component {
  render() {

    let resumeData = this.props.resumeData;
    //loop through the skills, get the skill percent and then set each in a card for future implementation
    let skillStyle = {
      height: '1em',
      background: '#2D2D2D',
      display: 'block',
      width: '60%',//this will allow eventual replacing with database values width: '${width}',
    };
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3> {resumeData.univ1}</h3>
                  <p className="info">
                    {resumeData.degree1} in {resumeData.major1} <span>•</span>{' '}
                    <em className="date">{resumeData.gradmo1} {resumeData.gradyr1}</em>
                  </p>
                  <p>
                    {resumeData.details1}
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3> {resumeData.univ2}</h3>
                  <p className="info">
                    {resumeData.degree2} in {resumeData.major2} <span>•</span>{' '}
                    <em className="date">{resumeData.gradmo2} {resumeData.gradyr2}</em>
                  </p>
                  <p>
                    {resumeData.details2}
                  </p>
                </div>
              </div>{' '}
                <div className="row item">
                <div className="twelve columns">
                  <h3> {resumeData.univ3}</h3>
                  <p className="info">
                    {resumeData.degree3} in {resumeData.major3} <span>•</span>{' '}
                    <em className="date">{resumeData.gradmo3} {resumeData.gradyr3}</em>
                  </p>
                  <p>
                    {resumeData.details3}
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>{resumeData.work1loc} </h3>
                  <p className="info">
                    {resumeData.work1Role1} <span>•</span>{' '}
                    <em className="date">{resumeData.work1Start} - {resumeData.work1End}</em>
                  </p>
                  <p>
                  {resumeData.work1Summary}
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>
              {resumeData.skillsummary}
              </p>
              <div id="skills">
                <h1>Skills</h1>
                <ul>
                  <li>CSS</li>
                  <div class="box">
                    <div style={skillStyle} id="one" ></div>
                  </div>
                  <li>NodeJS</li>
                  <div class="box">
                    <div id="two"></div>
                  </div>
                  <li>React</li>
                  <div class="box">
                    <div id="three"></div>
                  </div>
                  <li>MySQL, PostgreSQL</li>
                  <div class="box">
                    <div id="four"></div>
                  </div>
                  <li>JavaScript</li>
                  <div class="box">
                    <div id="five"></div>
                  </div>
                  <li>PHP</li>
                  <div class="box">
                    <div id="six"></div>
                  </div>
                </ul>
              </div>

              {/* end skill-bars */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End skills */}
        </section>
      </React.Fragment>
    );
  }
}
