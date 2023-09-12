import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import SocialLinks from "../socials/socials";

const divStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: "1em",
};


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
    emailjs.send('default_service', 'template_jflhs1h', contactForm, 'NJWYuO_Fm2CPh-uly')
      .then(res => {
        console.log(res.text);
        alert(res.text);
      }, err => {
        console.log(err.text);
      });
  };

  return (
    <div
      style={{
        paddingTop: "7em",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <SocialLinks />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
        }}
        style={{
          marginTop: "5em",
        }}
      >
        <div style={divStyle}>
          <label htmlFor="name">Name</label>
          <input id="name" value={contactForm['name']} onChange={(e) => setContactForm({...contactForm, name: e.value})} />
        </div>
        <div style={divStyle}>
          <label htmlFor="email">Email</label>
          <input id="email" value={contactForm['email']} onChange={(e) => setContactForm({...contactForm, email: e.value})} />
        </div>
        <div style={divStyle}>
          <label htmlFor="inquiry">Inquiry</label>
          <textarea
            id="inquiry"
            value={contactForm['inquiry']}
            onChange={(e) => setContactForm({...contactForm, inquiry: e.value})}
            rows="7"
            style={{
              resize: "none",
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
