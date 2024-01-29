import React, { useState } from "react";
import axios from "axios";
const ImgUpload = () => {
  const [image, setImage] = useState("");
  const handleImg = (e) => {
    setImage(e.target.files[0]);
  };
  const handleApi = () => {
    const formData = new formData();
    formData.append("image", image);
    axios.post("url", formData).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <input type="file" name="file" onChange={handleImg} />
      <button nClick={handleApi}>Submit</button>
    </div>
  );
};

export default ImgUpload;
