import React from "react";
import '../pages/Contact.scss'

const Contact = () => {
  return (
    <section>
      <div className="section-contact ">
        <h2 className="heading ">Contact Us</h2>
        <p className="text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form action="#" className="form-contact">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input "
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text" 
              id="subject"
              placeholder="let us know how we can help you"
              className="form_input "
            />
          </div>
          <div className=" msg-contact">
            <label htmlFor="message" className="form_label">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="Leave a comment...."
              className="form_input "
            />
          </div>
          <button type="submit" className="btn-C ">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
