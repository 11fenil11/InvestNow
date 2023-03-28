const regEx = {
  
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@gmail.com/,
  password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/,
  lettersOnly: /^[a-zA-Z\s]*$/,
};

const isLettersOnly = (text) => regEx.lettersOnly.test(text);

const isEmailValid = (email) => regEx.email.test(email);

const isPasswordValid = (password) => {
 
  //for password
  if (password.length >= 8) {
    return true;
  }

  return false;
};

export const validation = (value, inputValue) => {
  switch (value) {
    case "firstName":
      return isLettersOnly(inputValue);

    case "lastName":
      return isLettersOnly(inputValue);

    case "email":
      return isEmailValid(inputValue);

    case "password":
      return isPasswordValid(inputValue);

    default:
      return true;
  }
};

export const errorMessages = (value, inputValue) => {
  if (!inputValue) {
    return "This field is required";
  }

  switch (value) {
    case "firstName":
      return "First name must contain letters only";

    case "lastName":
      return "Last name must contain letters only";

    case "email":
      return "Email format is invalid";

    case "password":
      return "Password must have atleast eight characters";

    default:
      return "Invalid input";
  }
};