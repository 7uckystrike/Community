import React, { useState, useEffect }  from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios';

import ImageUpload from './ImageUpload';
import {UploadDiv, UploadForm, UploadButton} from '../../style/UploadCSS'


const Upload = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if(!user.accessToken) {
      alert("회원 전용")
      navigate("/login");
    }
  },[])

  function onSubmit(event) {
    event.preventDefault();
    if (title === "" || content === "") {
      return alert ("모든 항목을 채워주세요.")
    }

    let body = {
      title : title,
      content : content,
      image : image,
      uid : user.uid,
    };

    axios.post("/api/post/submit", body)
      .then((response) => {
        if(response.data.success) {
          alert("글 작성이 완료되었습니다.")
          navigate("/");
        } else {
          alert("글 작성에 실패하였습니다.")
        }
      }).catch((error) => {
        console.log(`에러입니다! ${error}`)
      })
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">제목</label>
        <input 
          id="title"
          type="text" 
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value)
          }} />

      <ImageUpload setImage={setImage} />
        
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => {
            setContent(event.currentTarget.value)
          }} />
        <UploadButton>
          <button onClick={onSubmit}>
            전송
          </button>
        </UploadButton>
      </UploadForm>  
    </UploadDiv>
  )
}

export default Upload


// 23년 2월 22일 수정