import React, { useState } from "react";

const FormFields = ({ data, formData, setFormData, submitData }) => {
  const [displayErrors, setDisplayErrors] = useState({});
  const isEmail = "^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$";
  const isMobile = "^[6-9][0-9]{9}$";
  const [showPassword,setShowPassword] = useState(true)

  const isLetter = (char)=>{
    return /[a-zA-Z]/g.test(char)
  }

  const setData = (e, data) => {
    if (Array.isArray(data.validationRules)) {
      data.validationRules?.forEach((rule)=>{
        if(rule == "isEmail" && isLetter(e.target.value)) {
          const isValidEmail = new RegExp(isEmail).test(e.target.value);
          if (!isValidEmail) {
            setDisplayErrors({
              ...displayErrors,
              [e.target.name]: "Enter a valid email address",
            });
          }
        }
        else if(rule == "isMobile"  && !isLetter(e.target.value)){
          const mob =  new RegExp(isMobile).test(e.target.value);
          if (!mob) {
            setDisplayErrors({
              ...displayErrors,
              [e.target.name]: "Enter a valid phone number",
            });
          }
        }
      })
    } else {
      console.log(new RegExp(data.validationRules).test(e.target.value),'rulkes',new RegExp(data.validationRules))
      if (new RegExp(data.validationRules).test(e.target.value)) {
       
        setDisplayErrors({ ...displayErrors, [e.target.name]: null });
      } else {
        setDisplayErrors({
          ...displayErrors,
          [e.target.name]: data.errorSentence,
        });
      }
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const showPasswordFn = (id) =>{
  let x = document.getElementById(id)
  if(x.value?.length>0){
    if(x.type=="password"){
      x.type ="text"
      setShowPassword(false)
    }
    else{
      x.type = "password"
      setShowPassword(true)
    }
  }
} 
  return (
    <div>
      {data.map((data, index) => {
        return (
          <div key={index} className="mb-2">
            <form >
            <input
            id={data?.name}
              type={data.inputType}
              placeholder={data.label}
              name={data.name}
              value={formData?.data?.name}
              onChange={(e) => setData(e, data)}
              autoComplete="new-password"
            />
            </form>
            {
              data?.name=="password" || data?.name == "confirmPassword" ?
              <span onClick={()=>showPasswordFn(data?.name)}>{showPassword?"Show":"Hide"}</span> : null
            }
            {displayErrors[data.name] ? (
              <span>{displayErrors[data.name]}</span>
            ) : null}
          </div>
        );
      })}
      <button onClick={() => submitData()}>Submit</button>
    </div>
  );
};

export default FormFields;
