import styled from "@emotion/styled";

const LoginDiv = styled.div`
  max-width: 360px;
  margin: 0 auto;
  margin-top: 10rem;
  form {
    width: 70%;
    padding: 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    label {
      font-weight: bold;
    }
  input {
    border: 1px solid #d9d9da;
    padding: 5px;
    margin-bottom: 10px;
    &:active, 
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 5px 10px;
    background-color: #000;
    border: 1px solid #000;
    color: white;
    margin-top: 10px;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
  @media (max-width: 756px) {
    width: 100%
  }
}
`
const MyPageDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 100px;
  form {
    margin-top: 2rem;
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      margin-bottom: 2rem;
      input {
        display: none;
      }
    }
    .Mypagebtn {
      height: 100%;
      border: 0.5px solid #000;
      border-radius: 6px;
      margin-top: 30px;
      background-color: #000;
      padding: 10px 20px;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export { LoginDiv, MyPageDiv };

//23년 2월 23일 수정