import React from 'react'
import Avatar from 'react-avatar' 
import moment from 'moment'
import 'moment/locale/ko'

import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import { ListDiv, ListItem, ListUser} from '../../style/ListCSS'


const List = (props) => {
  const user = useSelector((state) => state.user);

  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, hh:mm") ;
    } 
  }

  return (
    <ListDiv>
      {props.postList.map((post, index)=>{
        return (
          <ListItem key={index}>
            <Link to = {`/post/${post.postNum}`}>
              <ListUser>
                <Avatar size="90" src={post.author.photoURL}/>
                <div className="item">
                  <p className="title">{post.title}</p>
                  <span className="displayName">
                      {post.author.displayName}
                      {user.uid === post.author.uid && (
                        <span className="writer">작성자</span>)} </span>
                  <span className="postTime">
                      {SetTime(post.createdAt, post.updatedAt)} </span>
                </div>
              </ListUser>
            </Link>
          </ListItem>
        )
      })}
    </ListDiv>
  )
}

export default List

// 23년 2월 22일 수정