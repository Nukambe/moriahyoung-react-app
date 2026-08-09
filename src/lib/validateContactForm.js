const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const NAME_PATTERN = /^[\p{L}][\p{L}\s'.-]*$/u;

export const INQUIRY_MIN = 16;
export const INQUIRY_MAX = 1000;

/**
 * Returns a map of field name -> error message. An empty object means the
 * form is valid.
 */
export default function validateContactForm(form) {
  const errors = {};

  const name = form.name.trim();
  if (!name) {
    errors.name = "Please tell me your name.";
  } else if (!NAME_PATTERN.test(name)) {
    errors.name = "Names can only contain letters, spaces, apostrophes and hyphens.";
  }

  const email = form.email.trim();
  if (!email) {
    errors.email = "An email address is needed so I can reply.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "That doesn't look like a valid email address.";
  }

  const inquiry = form.inquiry.trim();
  if (inquiry.length < INQUIRY_MIN) {
    errors.inquiry = `A few more details, please — at least ${INQUIRY_MIN} characters.`;
  } else if (inquiry.length > INQUIRY_MAX) {
    errors.inquiry = `Please keep it under ${INQUIRY_MAX} characters.`;
  }

  return errors;
}
