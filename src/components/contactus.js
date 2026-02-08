import React from 'react';

export default function Contactus(props) {
  const resumeData = props.resumeData;

  return (
    <React.Fragment>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead">
              I'd love to hear from you. Whether you have a question, a project idea, or just want to connect, feel free to reach out.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            <h4>Reach out</h4>
            <p>
              <a href="mailto:whitneyscottasl@gmail.com" className="button">
                <i className="fa fa-envelope" /> Email Me
              </a>
            </p>
            <p>
              <a href="https://wa.me/19364627579" className="button">
                <i className="fa fa-whatsapp" /> WhatsApp
              </a>
            </p>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {resumeData.firstName} {resumeData.lastName}
                <br />
                {resumeData.address} {resumeData.street} <br />
                {resumeData.city}, {resumeData.state} {resumeData.zipcode}
                <br />
                <span>(936) 615-3285 (text only for Deaf access)</span>
              </p>
            </div>
          </aside>
        </div>
      </section>{' '}
      {/* Contact Section End*/}
    </React.Fragment>
  );
}
