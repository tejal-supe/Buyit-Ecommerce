import React,{useState} from 'react'
import FormFields from '../../common/FormFields'
import { useNavigate } from 'react-router-dom'

const inputToForm = [
  {
    name: "emailphone",
    inputType: "text",
    label: "Enter your email / Mobile Number",
    validationRules: ["/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/", "^[6-9]d{9}$"],
  },
  {
    name: "password",
    inputType: "password",
    label: "Enter Your Password",
    validationRules: "/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{7,15}$/",
  },
];
const LoginForm = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()
    console.log(formData, 'form data')
    const submitData = () => {
        
    }
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
          Forgot Password? <span>Click Here</span>
        </p>
        <p>
          New to the webiste?{" "}
          <span onClick={() => navigate("/sign-up")}>Sign Up Here</span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm