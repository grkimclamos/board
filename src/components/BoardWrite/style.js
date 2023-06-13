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
margin:50px 0;`;
const Inner = styled.div`
width:65%;
>div{
width: 100%;
margin-top:10px ;
display: flex;
justify-content: center;
}

`;
const BoardTitle = styled.h3`
`;
const TitleInput = styled.input`
width:100%;
height:40px;
margin:15px 0;`;
const BoardContents = styled.h3``;
const ContentsInput = styled.input`
width:100%;
height:500px;
margin:15px 0;
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Container,
    Title,
    Inner,
    BoardTitle,
    TitleInput,
    BoardContents,
    ContentsInput
};