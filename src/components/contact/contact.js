import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import SocialLinks from "../socials/socials";

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
  fontSize: '1em'
}


export default function Contact() {
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
    // emailjs.send('default_service', 'template_jflhs1h', contactForm, 'NJWYuO_Fm2CPh-uly')
    //   .then(res => {
    //     console.log(res.text);
    //     resetContactForm();
    //   }, err => {
    //     console.log(err.text);
    //   });
    console.log('SEND EMAIL');
  };

  return (
    <div
      style={{
        paddingTop: "1em",
        width: "80%",
        margin: "0 auto",
      }}
    >
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
            style={inputStyle}
          />
        </div>
        <div style={divStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            type="email"
            value={contactForm.email}
            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
            style={inputStyle}
          />
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
              border: '0.1em solid gray',
              borderRadius: '1em',
              padding: '1em 1em',
              fontSize: '1em'
            }}
          />
        </div>
        <button type="submit"
          style={{
            marginTop: '1.5em',
            marginLeft: '0em',
            padding: '0.7em 2.5em',
            border: '0.1em solid gray',
            borderRadius: '1em',
            backgroundColor: 'white'
          }}>Submit</button>
      </form>
    </div>
  );
}
