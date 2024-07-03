import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Write = () => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = () => {
    // Implement your submit logic here, to send 'description' to backend
    console.log(description);
  };

  return (
    <div className="write_comp">
      <section className="w-[90%] md:w-[90%] lg:w-[60%] mx-auto py-[3rem]">
        <ReactQuill
          theme="bubble"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Write Your Story..."
          className="write my-5 write_comp_story"
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image", "video"],
              ["clean"],
              ["code-block"],
            ],
          }}
        />
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Submit
        </button>
      </section>
    </div>
  );
};

export default Write;
