export default function validateContactForm(values) {
  const errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (values.phone) {
    const ukPhoneRegex = /^(?:\+44\s?7\d{3}|\(?07\d{3}\)?|\(?01\d{3}\)?|\(?02\d{3}\)?|\(?03\d{3}\)?|\(?08\d{3}\)?|\(?09\d{3}\)?)[\s-]?\d{3}[\s-]?\d{3,4}$/;
    if (!ukPhoneRegex.test(values.phone.replace(/\s+/g, ""))) {
      errors.phone = "Please enter a valid UK phone number";
    }
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.service) {
    errors.service = "Please select a service";
  }

  if (!values.projectDetails || values.projectDetails.trim().length < 10) {
    errors.projectDetails = "Please provide more details (at least 10 characters)";
  }

  return errors;
}