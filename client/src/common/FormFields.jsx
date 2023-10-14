import React from "react";

const FormFields = ({ data , formData , setFormData , submitData}) => {
  const setData = (e,rules) => {
    // console.log(e.target.name, e.target.value)
    console.log(Array.isArray(rules), rules,"input array");
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  return (
    <div>
      {
        data.map((data, index) => {
          return (
            <div key={index}>
              <input
                type={data.inputType}
                placeholder={data.label}
                name={data.name}
                value={formData?.data?.name}
                onChange={(e) => setData(e,data.validationRules)}
              />
            </div>
          );
       }) 
      }
      <button onClick={()=>submitData()}>Submit</button>
    </div>
  );
};

export default FormFields;
