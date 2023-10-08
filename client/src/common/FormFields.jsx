import React from "react";

const FormFields = ({ data , formData , setFormData , submitData}) => {
  console.log(data, "input array");
  const setData = (e) => {
    console.log(e.target.name, e.target.value)
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
                onChange={(e) => setData(e)}
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
