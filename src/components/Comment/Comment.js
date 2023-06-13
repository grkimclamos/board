import Style from "./style"; 
import CommentList from "./CommentList/CommentList";
import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";

//글작성 시 댓글 내역의 상태가 변하기 때문에 상태가 필요하기 때문에 클래스형 컴포넌트를 구상해야 한다.
class Comment extends React.Component{
  //constructor : 리액트가 돔에 마운트되기전에 컴포넌트의 초기 state를 설정해야할 때 사용
  //규칙: this.props를 사용하기 전에 super(props)를 사용해야한다. 
  constructor(props){
    super(props);
    this.state={
      comments:[
         {
          writer : "김가람",
          content : "안녕하세요. 반갑습니다. 다음에 또 봐요. 야호",
          date : "2022-10-02"
         },
         {writer : "김가람",
          content : "Hello. Nice to meet you. See you later. kkkkk",
          date : "2023-02-23"
         }
      ]
    }
    this.addComment = this.addComment.bind(this);

  }
  addComment(){
    let value = document.querySelector('#new-comment-content').value;
    this.setState({comments: [...this.state.comments,{
      content: value ,
      writer : "김가람",
      date : new Date().toISOString().slice(0,10)
    }]})
  
  }

   OnkeyPress(e){
    if(e.key === 'Enter'){
      this.addComment();
    }
   }
 


render(){
  
  return(
 <>
    <Style.Container>
         <input id="new-comment-content" placeholder="댓글을 입력해주세요." onKeyDown={(e) => this.OnkeyPress(e)} value={this.value}></input>
         <Button variant="secondary" onClick={this.addComment} >등록</Button>
          
    </Style.Container>
     {this.state.comments.map(comment => {
      return(<CommentList comment={comment}/>)
     })}
   
   </>
  )
}
}
export default Comment;