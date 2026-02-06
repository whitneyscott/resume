import React, { useState } from 'react';

export default function Contactus(props) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');

  const formSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just show a success message
      console.log('Form submitted:', { name, message, email });
      setSent(true);
      setButtonText('Message Sent!');
      // Reset form after successful submission
      setTimeout(() => {
        setName('');
        setMessage('');
        setEmail('');
        setSent(false);
        setButtonText('Send Message');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setButtonText('Send Message');
    }
  };

  const resumeData = props.resumeData;
  
  return (
    <React.Fragment>
      {/*generated code*/}
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead" />
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form className="contact-form" onSubmit={formSubmit}>
              <label className="message" htmlFor="message-input">Your Message</label>
              <textarea 
                onChange={e => setMessage(e.target.value)} 
                name="message" 
                className="message-input" 
                type="text" 
                placeholder="Please write your message here" 
                value={message} 
                required
              />

              <label className="message-name" htmlFor="message-name">Your Name</label>
              <input 
                onChange={e => setName(e.target.value)} 
                name="name" 
                className="message-name" 
                type="text" 
                placeholder="Your Name" 
                value={name}
              />

              <label className="message-email" htmlFor="message-email">Your Email</label>
              <input 
                onChange={e => setEmail(e.target.value)} 
                name="email" 
                className="message-email" 
                type="email" 
                placeholder="your@email.com" 
                required 
                value={email} 
              />

              <div className="button--container">
                  <button type="submit" className="button button-primary">{buttonText}</button>
              </div>
            </form>
            {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />
              Your message was sent, thank you for contacting me!
              <br />
            </div>
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
                <span>(936) 615-3285</span>
              </p>
            </div>
{/*              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="#">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="#">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="#">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="#">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>*/}
          </aside>
        </div>
      </section>{' '}
      {/* Contact Section End*/}
    </React.Fragment>
  );
}
