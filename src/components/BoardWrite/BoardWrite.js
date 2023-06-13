import Style from "./style";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { newBoardState } from "../../state/atoms";
import { useNavigate } from "react-router-dom";


const BoardWrite = () => {
  
const navigate = useNavigate();
const setNewBoard= useSetRecoilState(newBoardState);

//useState가 객체를 관리하도록 하기. input에 name이라는 props를 설정하여 이벤트가 발생시 값을 참조
const [inputs, setInputs] = useState({
title :'' ,
contents : ''
})

const {title ,contents } = inputs;
//onChange 이벤트가 발생할 때마다 발생하는 타겟의 name 속성이 받아지고 있다.
//handleInputChange 함수에서 비구조화할당으로 name과 value로 한다.
//setInputs : 기존의 inputs 객체를 복사한 뒤 name이라는 키를 가진 값을 value로 설정한다는 의미 **꼭 기존 객체를 복사해주고 특정값만 덮어씌운 상태로 설정해줘야한다.
//스프레드 문법 : 불변성을 지킨다. 리액트에서는 불변성을 지켜주어야만 컴포넌트 업데이트 성능 최적화를 할 수 있다.
 const handleInputChange = (e) =>{
   const {name , value} = e.target;
   setInputs({
    ...inputs,
    [name]:value
   })
 };

 const handleBoardAdd = () => {
    setNewBoard((prev)=>[
    ...prev, {
      id: getId(),
      title : title ,
      contents :contents ,
      name : "김가람",
      date : new Date().toISOString().slice(0,10) 
}])
navigate("/");
alert("게시글이 작성되었습니다.");
 };
 let id = 30;
 const getId = () =>{
     return id++;}

return(
  <Style.Container>
    <Style.Title>게시글 쓰기</Style.Title>
    <Style.Inner>
    <Style.BoardTitle>제목</Style.BoardTitle>
    <Style.TitleInput name="title" placeholder="제목을 입력하세요."
      onChange={handleInputChange}></Style.TitleInput>
      {/* <input name="title" onChange={handleInputChange} /> */}
    <Style.BoardContents>내용</Style.BoardContents>
    <Style.ContentsInput name="contents" placeholder="내용을 입력하세요."
      onChange={handleInputChange}></Style.ContentsInput>
     <div>
     <Button variant="secondary" onClick={handleBoardAdd} >저장하기</Button>
     </div>
    </Style.Inner>
  </Style.Container>
  
)
};
export default BoardWrite;