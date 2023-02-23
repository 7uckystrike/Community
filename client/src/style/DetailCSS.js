import styled from "@emotion/styled"

const PostDiv = styled.div`
  padding-top: 4rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`

const PostUser = styled.div `
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #eee;

    .displayName {
      margin-bottom: 13px;
      font-size:13px;
      font-weight: bold;
      margin-left: 10px;
    }

    .writer {
      position: relative;
      top: -1px;
      margin-left: 8px;
      padding: 2px 8px;
      font-size: 9px;
      font-weight: bold;
      background-color: #ffd400;
      border-radius: 5px;
      color: #000;
    }
  `

const PostContent = styled.div`
  margin-top: 30px;
`

const SpinnerDiv = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  button {
    border-radius: 6px;
    padding: 5px 10px;
    font-weight: bold;
    &.edit {
      background-color: white;
      color: black;
      border: 1px solid #000;
      &:hover {
        background-color: #ffd400;
        color: #000;
        border: 1px solid #ffd400;
      }
    }
    &.delete {
      margin-left: 10px;
      background-color: #000;
      color: white;
      border: 1px solid #000;
      &:hover {
        background-color: #ffd400;
        color: #000;
        border: 1px solid #ffd400;
      }
    }
  }
`

const Post = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 30px 20px;
  border: 1px solid #d9d9da;
  .title {
    font-weight: bold;
    font-size: 30px;
    margin-left: 5px;
    margin-bottom: 20px; }
` 
export { PostDiv, SpinnerDiv, Post, BtnDiv, PostUser, PostContent }

//23년 2월 23일 수정