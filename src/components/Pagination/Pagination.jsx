import style from "styled-components";
const Div = style.div`
display:flex;
justify-content: center;
`;
const Nav = style.nav`
display:flex;
justify-content:center
align-item:center
gap:4px;
margin:30px
`;
const Button = style.button`
border:none;
border-radius:8px
padding:8px
margin:0
background:#565656;
color:white;

&:hover{
    background:white;
    color:black;
    cusor:pointer;
    transform:translateY(-2px);
}

&[disabled]{
    background: #d3d3d3;
    color:white;
    cursor:revert;
    transform:revert;
}
&[aria-current]{
    background: darkgray;
    color:white;
    font-weight:bold;
    cursor:revert;
    transform:revert;
}
`;

const Pagination = ({total , limit , page , setPage}) => {

    const numPages = Math.ceil(total / limit);

    return(
    <Div>
    <Nav>
        <Button onClick={() => setPage(page-1)}disabled={page === 1}> &lt;</Button>
        {Array(numPages).fill().map((_,i) => (
         <Button key={i+1} onClick={() => setPage(i+1)} aria-current={page === 1 ? "page" : null}>
            {i+1}
         </Button>
        ))}
        <Button onClick={() => setPage(page+1)} disabled={page === numPages}> &gt;</Button>
    </Nav>
    </Div>
);
};
export default Pagination;