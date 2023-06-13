import styled from "styled-components";


const Container = styled.div`
width:100%;
height:100vh;
position:relative;
display:flex;
flex-direction:column;
align-items:center;


`;
const Title = styled.h1`
text-align:center;
margin:50px 0;

`;
const BoardSearch = styled.div`
width:85%;
display:flex;
justify-content: space-between;
margin-bottom:20px;

`;
const Left = styled.div`
width:50%;

`;
const Count = styled.div`
margin-top:5px;
`;
const Right = styled.div`
width:50%;
display: grid;
grid-auto-flow: column;
grid-template-columns: 1fr;
grid-column-gap: 10px;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Container
    ,Title
    ,BoardSearch
    ,Left
    ,Count
    ,Right
    
};