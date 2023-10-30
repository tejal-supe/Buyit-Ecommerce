import React, { useState } from "react";
import FormFields from "../../common/FormFields";
import { useNavigate } from "react-router-dom";

const inputToForm = [
  {
    name: "emailphone",
    inputType: "text",
    label: "Enter your email / Mobile Number",
    // validationRules: ["^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$", "^[6-9]d{9}$"],
    validationRules: ["isEmail", "isMobile"],
    errorSentence: [
      "Enter a valid email address",
      "Enter a valid phone number",
    ],
  },  
  {
    name: "password",
    inputType: "password",
    label: "Enter Your Password",
    validationRules: "^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{7,15}$",
    errorSentence:
      "Password should contain At least one uppercase letter ,At least one digit, At least one special character and the length should be between 7 and 15 characters",
  },
];
const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const submitData = async() => {
    alert("Logged in successfullyyyyy")
    navigate("/")
  };
  return (
    <div>
      <FormFields
        data={inputToForm}
        formData={formData}
        setFormData={setFormData}
        submitData={submitData}
      />
      <div>
        <p>
          Forgot Password? <span onClick={()=> navigate("/forgot-password")}>Click Here</span>
        </p>
        <p>
          New to the webiste?{" "}
          <span onClick={() => navigate("/sign-up")}>Sign Up Here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
