import React, { Component } from 'react';
export default class Testimonial extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>
                         {resumeData.testimonial1}
                        </p>
                        <cite>{resumeData.testifier1}</cite>
                      </blockquote>
                    </li>{' '}
                    {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>
                         {resumeData.testimonial2}
                        </p>
                        <cite>{resumeData.testifier2}</cite>
                      </blockquote>
                    </li>{' '}
                    {/* slide ends */}
                  </ul>
                </div>{' '}
                {/* div.flexslider ends */}
              </div>{' '}
              {/* div.flex-container ends */}
            </div>{' '}
            {/* row ends */}
          </div>{' '}
          {/* text-container ends */}
        </section>{' '}
        {/* Testimonials Section End*/}
      </React.Fragment>
    );
  }
}
