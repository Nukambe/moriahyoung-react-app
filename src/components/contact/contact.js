import { useState, useContext, useEffect } from "react";
import { ScreenContext } from "../../context/ScreenContext";
import { ThemeContext } from "../../context/ThemeContext";
import Footer from "../root/footer";
import emailjs from '@emailjs/browser';
import SocialLinks from "../socials/socials";
import validateForm from "./contactFormValidation";
import ContactError from "./contactError";

const divStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: "1em",
};

const labelStyle = {
  paddingLeft: '0.5em'
}

const inputStyle = {
  height: '2em',
  border: '0.1em solid gray',
  borderRadius: '1em',
  paddingLeft: '1em',
  fontSize: '1em',
}


export default function Contact() {
  const theme = useContext(ThemeContext);
  inputStyle.border = `0.15em solid ${theme.header}`;
  // inputStyle.backgroundColor = theme.secondary;
  const mediaQueries = useContext(ScreenContext);
  const [submittedForm, setSubmittedForm] = useState(false);
  const [formError, setFormError] = useState({
    name: false,
    email: false,
    inquiry: false,
    ok: false
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiry: ''
  });

  const resetContactForm = function () {
    setContactForm({
      name: '',
      email: '',
      inquiry: ''
    });
  };

  function sendEmail() {
    setSubmittedForm(true);
    if (!formError.ok) {
      return;
    }
    emailjs.send('default_service', 'template_jflhs1h', contactForm, 'NJWYuO_Fm2CPh-uly')
      .then(res => {
        console.log(res.text);
        resetContactForm();
        setSubmittedForm(false);
        alert('Inquiry Sent!');
      }, err => {
        console.log(err.text);
      });
  };

  useEffect(() => {
    if (!submittedForm) return;
    setFormError(validateForm(contactForm));
  }, [contactForm]);

  return (
    <div
      style={{
        paddingTop: "1em",
        width: "80%",
        maxWidth: '600px',
        margin: "0 auto",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {!mediaQueries.mobile && <div style={{ marginTop: '3em' }}></div>}
      <SocialLinks />
      <h2 style={{
        textAlign: 'center'
      }}>Can't wait to hear from you!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
        }}
        style={{
          marginTop: "2em",
        }}
      >
        <div style={divStyle}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input id="name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
            style={{...inputStyle, border: (submittedForm && !formError.name) ? '0.15em solid red' : inputStyle.border}}
          />
          {(submittedForm && !formError.name) && <ContactError name='name' />}
        </div>
        <div style={divStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            type="email"
            value={contactForm.email}
            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
            style={{...inputStyle, border: (submittedForm && !formError.email) ? '0.15em solid red' : inputStyle.border}}
          />
          {(submittedForm && !formError.email) && <ContactError name='email' />}
        </div>
        <div style={divStyle}>
          <label htmlFor="inquiry" style={labelStyle}>Inquiry</label>
          <textarea
            id="inquiry"
            value={contactForm.inquiry}
            onChange={(e) => setContactForm({ ...contactForm, inquiry: e.target.value })}
            rows="7"
            style={{
              resize: "none",
              border: (submittedForm && !formError.inquiry) ? '0.2em solid red' : `0.2em solid ${theme.header}`,
              borderRadius: '1em',
              padding: '1em 1em',
              fontSize: '1em'
            }}
          />
          {(submittedForm && !formError.inquiry) && <ContactError name='inquiry' />}
        </div>
        <button type="submit"
          style={{
            marginTop: '1.5em',
            marginLeft: '0em',
            padding: '0.7em 2.5em',
            border: `0.1em solid ${theme.header}`,
            borderRadius: '1em',
            backgroundColor: theme.secondary
          }}>Submit</button>
      </form>
      {!mediaQueries.mobile && <Footer />}
    </div>
  );
}
