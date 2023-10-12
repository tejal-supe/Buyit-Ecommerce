import React, { useState } from "react";
import FormFields from "../../common/FormFields";
const inputData = [
  {
    name: "firstName",
    label: "First Name",
    inputType: "text",
    validationRules: "^[a-zA-Z ]{2,30}$",
    errorSentence:"Name should contain alphabets only"
  },
  {
    name: "lastName",
    label: "Last Name",
    inputType: "text",
    validationRules: "^[a-zA-Z ]{2,30}$",
    errorSentence:"Name should contain alphabets only"
  },
  {
    name: "email",
    label: "Enter Email",
    inputType: "text",
    validationRules: "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$",
    errorSentence:"Enter a valid email address"
  },
  {
    name: "mobile",
    label: "Enter Phone Number",
      inputType: "text",
    validationRules:"^[6-9][0-9]{9}$",
    errorSentence:"Enter a valid phone number"
  },
  {
    name: "password",
    label: "Enter Password",
    inputType: "password",
    validationRules:"^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{7,15}$",
    errorSentence:"Password should contain At least one uppercase letter ,At least one digit, At least one special character and the length should be between 7 and 15 characters"
  },
  {
    name: "confirmPassword",
    label: "Re-enter your password",
    inputType: "password",
    errorSentence:"Passwords do not match"
  },
];
const SignUpForm = () => {
  const [formFields, setFormFields] = useState({});
    const submitData = () => {
      alert("Logged in successfullyyyyy")
  };
  return (
    <div>
      <FormFields
        data={inputData}
        formData={formFields}
        setFormData={setFormFields}
        submitData={submitData}
      />
    </div>
  );
};

export default SignUpForm;
