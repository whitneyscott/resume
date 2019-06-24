import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt="Screen shot frm the ZTM coding competition 6 submission" src="images/portfolio/CodingCompetition.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Coding Competition</h5>
                          <p>Javascript and CSS</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{' '}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="Screen shot of ASL Geography SimpleMaps project" src="images/portfolio/SimpleMaps.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>SimpleMaps</h5>
                          <p>Web Development - Youtube API</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{' '}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="Screen shot of the receptive mode in the ASLexpress App" src="images/portfolio/ASLexpress.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>ASLexpress</h5>
                          <p>PHP and Database Manipulation</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{' '}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt="Icon of the SnapShot ASL App" src="images/portfolio/SnapShotASL.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>SnapShot ASL</h5>
                          <p>3D Fingerspelling Recognizier</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{' '}
              </div>{' '}
              {/* portfolio-wrapper end */}
            </div>{' '}
            {/* twelve columns end */}
            {/* Modal Popup
                --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/CodingCompetition.jpg"
                alt="Screen shot frm the ZTM coding competition 6 submission"
              />
              <div className="description-box">
                <h4>Coding Competition</h4>
                <p>
                  During the "Zero-to-Mastery" web developer course, I participated in a coding competition. The competition required solving 3 problems using Javascript. I went beyond the requirements to incude  CSS, Dom Manipulation, and a funny image that changes with input.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Javascript and CSS
                </span>
              </div>
              <div className="link-box">
                <a href="http://aslexpress.net/CodingCompetition6/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/SimpleMaps.jpg"
                alt="Screen shot of ASL Geography SimpleMaps project" 
              />
              <div className="description-box">
                <h4>SimpleMaps</h4>
                <p>
                  Collaboration with ASL Resources to link YouTube country signs to an interactive map.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Web Development, YouTube API
                </span>
              </div>
              <div className="link-box">
                <a href="https://simplemaps.com/custom/world/2ljkkdoN#finish">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/ASLexpress.jpg"
                alt="Screen shot of the receptive mode in the ASLexpress App" 
              />
              <div className="description-box">
                <h4>ASLexpress</h4>
                <p>
                  Software accesses a MySQL database to track study progress. The database links to an HTML5 video viewer which displays an ASL word and then evaluates the student's answer.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  PHP and MySQL
                </span>
              </div>
              <div className="link-box">
                <a href="http://www.aslexpress.net/quizDev/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/SnapShotASL.jpg"
                alt="Icon of the SnapShot ASL App"
              />
              <div className="description-box">
                <h4>SnapShot ASL</h4>
                <p>
                  Used VisualStudio with C++ to recognize fingerspelling. The App was developed in 45 days as part of the Intel RealSense App Development competition. Uses simple comparison with example data in a database.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  C++ in VisualStudio
                </span>
              </div>
              <div className="link-box">
                <a href="https://www.youtube.com/watch?v=ZLLb_WjFOQM">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-04 End */}
            {/* modal-01 End */}
          </div>{' '}
          {/* row End */}
        </section>{' '}
        {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}
