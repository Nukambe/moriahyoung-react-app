import validator from "validator";

function validateEmail(email) {
    return validator.isEmail(email);
};

function validateName(name) {
    name = name.split(' ').join('');
    name = name.split('-').join('');
    return !validator.isEmpty(name) && validator.isAlpha(name);
};

function validateInquiry(inquiry) {
    return validator.isLength(inquiry, { min: 16, max: 280 });
};

export default function validateForm(form) {
    const errors = {};
    errors.email = validateEmail(form.email);
    errors.name = validateName(form.name);
    errors.inquiry = validateInquiry(form.inquiry);
    errors.ok = errors.email && errors.name && errors.inquiry;
    return errors;
};
