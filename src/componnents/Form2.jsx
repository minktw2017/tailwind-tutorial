import { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    content: "",
  });

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="
      max-w-[1200px] 
      h-[600px] 
      mx-auto
      flex 
      justify-center
      items-start
      ">
      <div
        className=" 
        px-4 
        w-1/2    
        flex 
        justify-start
        items-start
        flex-col">
        <form
          action="/"
          className="w-full">
          <label
            className="formLabel"
            htmlFor="name">
            Input Name
          </label>
          <input
            className="formInput"
            type="text"
            value={formData.name}
            name="name"
            onChange={handleInputData}
          />
          <label
            className="formLabel"
            htmlFor="phone">
            Input Phone
          </label>
          <input
            className="formInput"
            type="text"
            value={formData.phone}
            name="phone"
            onChange={handleInputData}
          />
          <label
            className="formLabel"
            htmlFor="content">
            Input Content
          </label>
          <textarea
            className="formInput"
            type="text"
            value={formData.content}
            name="content"
            onChange={handleInputData}
          />
        </form>
        <button
          type="submit"
          className="my-button">
          Submit
        </button>
      </div>
      <div
        className=" 
        w-1/2     
        flex 
        justify-start
        items-start
        flex-col
        ">
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Input Value:</p>
        <p>
          <span className="w-4">Name:</span>
          {formData.name}
        </p>
        <p>
          <span className="w-4">Phone:</span>
          {formData.phone}
        </p>
        <p>
          <span className="w-4">Content:</span>
          {formData.content}
        </p>
      </div>
    </div>
  );
};

export default Form2;
