import Style from "./style";
import Button from "react-bootstrap/Button";
import data from "../../db/data";
import {  useLocation ,useParams ,useNavigate } from "react-router-dom";
import Comment from "../Comment/Comment";
import React, {  useEffect ,useState } from "react";
import { newBoardState } from "../../state/atoms";
import { useRecoilState } from "recoil";

const BoardView = () => {
  const location = useLocation();
   const {id} = useParams();
   const navigate = useNavigate();
   const goBoardWrite = () => {
      navigate("/BoardWrite");
   };
   const goBoardDelete = () => {
    navigate("/");
    alert("게시글이 삭제되었습니다.");
 };
   const goBoardModify = () => {
    navigate("/");
    alert("게시글이 수정되었습니다.");
 };
 const {list} = location.state;



 const BoardInfo = list.find(e => Number(e.id) === Number(id))


   
     return(
        <Style.Container>
        <Style.Title>게시판</Style.Title>
        <Style.Wrap>
        <table width="100%">
              <colgroup>
                <col width= "20%" />
                <col width= "80%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>제목</th>
                  <td>{BoardInfo.title}</td>
                </tr>
                <tr>
                  <th>등록자</th>
                  <td>{BoardInfo.name}</td>
                </tr>
                <tr>
                  <th>등록일</th>
                  <td>{BoardInfo.date}</td>
                </tr>
                <tr>
                  <th>내용</th>
                  <td className="height">
                  {BoardInfo.contents}
                  </td>
                </tr>
              </tbody>
            </table>
            </Style.Wrap>
         <Style.Footer>
            <Button variant="secondary" onClick={goBoardWrite} >글쓰기</Button>
            <Button variant="secondary" onClick={goBoardModify}>수정하기</Button>
            <Button variant="secondary" onClick={goBoardDelete}>삭제하기</Button>
        </Style.Footer>
        <Comment/>
       </Style.Container>
       
    )
    };
    export default BoardView;