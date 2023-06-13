import React, { useEffect ,useState } from "react";
import BoardList from "../BoardList/BoardList";
import Style from "./style";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../db/data";
import { newBoardState } from "../../state/atoms";
import { useRecoilState } from "recoil";

const StyleLink = styled(Link)`
    text-decoration: none;
    color:black;
    box-sizing: border-box;
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
	text-align: center;`;

const Board = () => {
 
   const [list,setList] = useState([]);
   const [newBoardList , setNewBoardList] = useRecoilState(newBoardState)
   
  
   
  //입력한 단어 ss변수에 담기
  const [ss,setSs] = useState("");  //입력한 단어
  const handleChange= (ss) =>{
    setSs(ss);
  }
  const onChange = (e) =>{
  handleChange(e.target.value)
 }

 //ss에 값이 들어왔을 때 list 변경
 let Searchlist = [];
 list.forEach((p)=>{
  if(p.title.indexOf(ss)===-1 && p.name.indexOf(ss)===-1 && p.date.indexOf(ss)===-1){
    return;
  }
  
  Searchlist.push(p)
 })

 useEffect(()=>{
  setList([...(newBoardList||[]),...(data||[])])

},[newBoardList])







    return(
       <Style.Container>
        <Style.Title>게시판</Style.Title>
         <Style.BoardSearch>
            <Style.Left>
                <Style.Count>총 <em>{list.length}</em> 건의 게시물이 등록되어있습니다.</Style.Count>
            </Style.Left>
            <Style.Right>
            <input type="Search" placeholder="검색어를 입력하세요." onChange={onChange} value={ss}/>
            <select name="SearchOption" id="SearchOption">
                <option value="title">제목</option>
                <option value="name">등록자</option>
                <option value="date">등록일</option>
            </select>
           <StyleLink to ="/BoardWrite">글쓰기</StyleLink>
           </Style.Right>
         </Style.BoardSearch>
        <BoardList list={Searchlist}/>
       </Style.Container>
       
      
    );
}

export default Board;