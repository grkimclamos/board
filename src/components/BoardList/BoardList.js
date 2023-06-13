import React, { useEffect ,useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../Pagination/Pagination";


const Null = styled.p`
margin-top:10px;
text-align:center;
font-size:20px;
`;

const BoardList = ({list}) => {

const [id,setId] =useState("");
const navigate = useNavigate();
const goBoardView = (BoardId) => {
    setId(BoardId)
    navigate("/BoardView/" + BoardId ,{state : { list : list} });
}



//페이징
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);
const offset = (page - 1) * limit;

 return(
   <div className="container" width="auto">
    <div className="boardList">
  
     {list?.length > 0 ? (      
     <>
        <Table  bordered hover>
        <thead>
            <tr>
                <th width="10%">선택</th>
                <th width="10%">번호</th>
                <th width="50%">제목</th>
                <th width="15%">작성자</th>
                <th width="15%">등록일</th>
            </tr>
            </thead>
          <tbody>
               {list.slice(offset,offset + limit).map((item,i) => {
                    return(<tr key={i} onClick={() => goBoardView(item.id) }>
                <td>
                 <input type="checkbox"></input>
                </td>
                    <td>{offset+i+1}</td>
                <td>{item.title}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
               </tr>    )
                })}
        </tbody>
          
        </Table>
        <Pagination total={list.length}
                    limit={limit}
                    page={page}
                    setPage={setPage} />
        </>
         ) :
       <Null>게시물이 없습니다.</Null>}
    </div>

    </div>
  
)
};
export default BoardList;