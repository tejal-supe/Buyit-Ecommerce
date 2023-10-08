import React,{useState} from 'react'
import FormFields from '../../common/FormFields'
import { useNavigate } from 'react-router-dom'

const inputToForm = [
    {
        name: "email",
        inputType: "text",
        label:"Enter your email / Mobile Number"
        
    },
    {
        name: "password",
        inputType: "password",
        label:"Enter Your Password"
    }
]
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