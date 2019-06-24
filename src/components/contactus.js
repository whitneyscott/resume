import React, { Component } from 'react';
export default class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A message was sent: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    let resumeData = this.props.resumeData;
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
            <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
              <label class="message" htmlFor="message-input">Your Message</label>
              <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>

              <label class="message-name" htmlFor="message-name">Your Name</label>
              <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

              <label class="message-email" htmlFor="message-email">Your Email</label>
              <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

              <div className="button--container">
                  <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
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
}
