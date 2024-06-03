import { useState } from "react";

const Form3 = () => {

  const[formData, setFormData] = useState({
    "name": "",
    "email": "",
    "phone": "",
    "content": ""
  })

  const handleInputData = (e) => {
    const {name, value}= e.target;
    setFormData((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-[1200px] h-[600px] mx-auto flex justify-center items-start">
      <div className="w-1/2 flex justify-start items-start flex-col">
        <form action="/" className="w-full">
          <label htmlFor="name" className="formLabel">Name:</label>
          <input  type="text" name="name" className="formInput" value={formData.name} onChange={handleInputData} />
          <label htmlFor="email" className="formLabel">Email:</label>
          <input  type="text" name="email" className="formInput" value={formData.email} onChange={handleInputData} />
          <label htmlFor="phone" className="formLabel">Phone:</label>
          <input  type="text" name="phone" className="formInput" value={formData.phone} onChange={handleInputData} />
          <label htmlFor="content" className="formLabel">Content:</label>
          <textarea name="content" className="formInput" value={formData.content} onChange={handleInputData} />
        </form>
      </div>
      <div className="w-1/2 pl-4 flex justify-start items-start flex-col">
        <p className="mb-14 text-sm font-medium text-gray-900">Name:{formData.name ? formData.name : "empty"}</p>
        <p className="mb-14 text-sm font-medium text-gray-900">Email:{formData.email ? formData.email : "empty"}</p>
        <p className="mb-14 text-sm font-medium text-gray-900">Phone:{formData.phone ?  formData.phone : "empty"}</p>
        <p className="mb-14 text-sm font-medium text-gray-900">Content:{formData.content ?  formData.content : "empty"}</p>
      </div>
    </div>
  );
};

export default Form3;
