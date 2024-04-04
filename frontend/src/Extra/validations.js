export const firstNameVal = (value) => {
  if (!value) return "First name is required";

  if (!value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g))
    return "First name only contain alphabets";

  return null;
};

export const lastNameVal = (value) => {
  if (!value) return "Last name is required";

  if (!value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g))
    return "Last name only contain alphabets";

  return null;
};

export const emailVal = (value) => {
  if (!value) return "Email is required";

  if (
    !value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  )
    return "Email is not valid";

  return null;
};

export const phoneVal = (mobile) => {
  const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10,}$/;
  if (!mobile) {
    return "Phone Number is required";
  }
  if (!mobileRegex.test(mobile)) {
    return "Phone Number is not valid";
  }

  return null;
};

export const passwordVal = (value) => {
  if (!value) return "Password is required";
  return null;
};

export const confirmPasswordVal = (password, confirmPassword) => {
  if (!password) return "Confirm Password is required";
  if (password !== confirmPassword) return "Passwords do not match";

  return null;
};

export const fullNameVal = (value) => {
  if (!value) return "First name is required";

  if (!value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g))
    return "First name only contain alphabets";

  return null;
};

export const feedbackVal = (value) => {
  if (!value) return "Feedback is required";

  return null;
};
