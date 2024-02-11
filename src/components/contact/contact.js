import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import SocialLinks from "../socials/socials";
import validateForm from "./contactFormValidation";
import ContactInput from "./contactInput";
import { motion } from "framer-motion";

export default function Contact() {
  const [submittedForm, setSubmittedForm] = useState(false);
  const [formError, setFormError] = useState({
    name: false,
    email: false,
    inquiry: false,
    ok: false,
  });
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  const resetContactForm = function () {
    setContactForm({
      name: "",
      email: "",
      inquiry: "",
    });
  };

  function sendEmail(event) {
    event.preventDefault();
    setSubmittedForm(true);
    if (!formError.ok) {
      console.log("Form error. Not sending email.");
      return;
    }
    emailjs
      .send(
        "default_service",
        "template_jflhs1h",
        contactForm,
        "NJWYuO_Fm2CPh-uly"
      )
      .then(
        (res) => {
          console.log(res.text);
          resetContactForm();
          setSubmittedForm(false);
          alert("Inquiry Sent!");
        },
        (err) => {
          console.log(err.text);
          alert("Error sending inquiry. Please try again later.");
        }
      );
  }

  useEffect(() => {
    if (!submittedForm) return;
    setFormError(validateForm(contactForm));
    console.log("validating form");
  }, [contactForm, submittedForm]);

  return (
    <div
      style={{
        paddingTop: "1em",
        width: "80%",
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="text-center mt-16 text-4xl text-rose-800">
        <p>Reach out!</p>
        <p>I'd love to hear from you.</p>
      </div>
      <SocialLinks className="mx-auto my-8 w-96 text-4xl flex justify-evenly text-rose-800" />
      <form onSubmit={(e) => sendEmail(e)}>
        <ContactInput
          label="Name"
          type="text"
          autoComplete="name"
          value={contactForm.name}
          setValue={(value) => setContactForm({ ...contactForm, name: value })}
          error={!formError.name && submittedForm}
          errorText="Invalid name. Must contain only letters."
        />
        <ContactInput
          label="Email"
          type="email"
          autoComplete="email"
          value={contactForm.email}
          setValue={(value) => setContactForm({ ...contactForm, email: value })}
          error={!formError.email && submittedForm}
          errorText="Invalid email. Must be a valid email address."
        />
        <ContactInput
          label="Inquiry"
          type="textarea"
          value={contactForm.inquiry}
          setValue={(value) =>
            setContactForm({ ...contactForm, inquiry: value })
          }
          error={!formError.inquiry && submittedForm}
          errorText="Inquiry must be between 16 and 280 characters."
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="bg-rose-800 text-white px-8 py-2 text-2xl rounded-md"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
}
