import styled from "@emotion/styled"

const ListDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`

const ListItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background-color: #fff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  border: 1px solid #c6c6c6;
  a {
    color: #000;
    text-decoration: none;
  }
`

const ListUser = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;

  .item {
     display: flex;
     flex-direction: column;
     margin-left: 30px;
  }
  .title {
      font-weight: bold;
      font-size: 18px;
      padding-bottom: 10px;
  }   
  .displayName {
      font-weight: bold;
      font-size: 12px;
  }
  .postTime {
      font-size: 9px;
      background-color: #efefef;
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

export { ListDiv, ListItem, ListUser }


// 23년 2월 22일 수정