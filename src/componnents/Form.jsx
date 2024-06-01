import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    "entry.621284340": "", // name
    "entry.1213793690": "", // Line or Tel
    "entry.1410310201": "", // Content
  });

  async function handleSubmit(e) {
    let url = `https://docs.google.com/forms/d/e/1FAIpQLSdBOT8r9IE_DxGbIVJ6AR6v6qTbEFIO9dxhfhu_T5zww2oWNA/formResponse?621284340=${formData["621284340"]}&entry.1213793690=${formData["entry.1213793690"]}&entry.1410310201=${formData["entry.1410310201"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencode",
      },
    });
  }

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  return (
    <div className="max-w-[1200px] min-h-[120px] mx-auto">
      <form
        onSubmit={handleSubmit}
        target="_self">
        <fieldset>
          <label htmlFor="entry.621284340">姓名</label>
          <input
            type="text"
            name="entry.621284340"
            className="shadow appearance-none border rounded w-full py-2  px-3 text-gray-700 leading-tight z-50 focus:outline-none focus:shadow-outline"
            required="true"
            onChange={handleInputData("entry.621284340")}
            value={formData["entry.621284340"]}
            autoComplete={false}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="entry.1213793690">電話或Line ID</label>
          <input
            type="text"
            name="entry.1213793690"
            className="shadow appearance-none border rounded w-full py-2  px-3 text-gray-700 leading-tight z-50 focus:outline-none focus:shadow-outline"
            required="true"
            onChange={handleInputData("entry.1213793690")}
            value={formData["entry.1213793690"]}
            autoComplete={false}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="entry.1410310201">合作方式或提案內容</label>
          <input
            type="text"
            name="entry.1410310201"
            className="shadow appearance-none border rounded w-full py-2  px-3 text-gray-700 leading-tight z-50 focus:outline-none focus:shadow-outline"
            required="true"
            onChange={handleInputData("entry.1410310201")}
            value={formData["entry.1410310201"]}
            autoComplete={false}
          />
        </fieldset>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Form;
