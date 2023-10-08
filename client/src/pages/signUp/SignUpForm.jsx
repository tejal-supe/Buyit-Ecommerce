import React, { useState } from "react";
import FormFields from "../../common/FormFields";
const inputData = [
  {
    name: "firstName",
    label: "First Name",
    inputType: "text",
    validationRules: "/^[a-zA-Z ]{2,30}$/",
  },
  {
    name: "lastName",
    label: "Last Name",
    inputType: "text",
    validationRules: "/^[a-zA-Z ]{2,30}$/",
  },
  {
    name: "email",
    label: "Enter Email",
    inputType: "text",
    validationRules: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
  },
  {
    name: "mobile",
    label: "Enter Phone Number",
      inputType: "text",
    validationRules:"^[6-9]\d{9}$"
  },
  {
    name: "password",
    label: "Enter Password",
    inputType: "password",
  },
  {
    name: "confirmPassword",
    label: "Re-enter your password",
    inputType: "password",
  },
];
const SignUpForm = () => {
  const [formFields, setFormFields] = useState({});
    const submitData = () => {
      
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
