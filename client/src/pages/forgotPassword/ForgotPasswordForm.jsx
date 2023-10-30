import React, { useState } from "react";
import FormFields from "../../common/FormFields";

const inputToForm = [
  {
    name: "email",
    label: "Enter Email",
    inputType: "text",
    validationRules:
      "^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9\-])+\.+([a-zA-Z0-9]{2,4})+$",
    errorSentence: "Enter a valid email address",
  },
  
];
const passwordChange =[
    {
        name: "password",
        inputType: "password",
        label: "Enter Your Password",
        validationRules: "^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{7,15}$",
        errorSentence:
          "Password should contain At least one uppercase letter ,At least one digit, At least one special character and the length should be between 7 and 15 characters",
      },
      {
        name: "confirmPassword",
        label: "Re-enter your password",
        inputType: "password",
        errorSentence: "Passwords do not match",
      },
]
const ForgotPasswordForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState({})

    const submitMail = () =>{

    }
  return <div>
    <FormFields data={inputToForm} submitData={submitMail} setFormData={setEmail} formData={email}/>
  </div>;
};

export default ForgotPasswordForm;
