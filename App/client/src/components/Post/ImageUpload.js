import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

function ImageUpload(props) {

  const FileUpload = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/image/upload", formData).then((response) => {
      console.log(props.setImage)
      props.setImage(response.data.filePath);
    });
  };

  return (
    <div>
      <Form.Control
        type="file"
        accept="image/*"
        onChange={FileUpload}
        style={{
          marginTop:"10px",
          paddingLeft: "20px"}}
      />
    </div>
  );
}

export default ImageUpload;