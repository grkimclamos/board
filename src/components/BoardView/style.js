import styled from "styled-components";
const Container = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
`;
const Title = styled.h1`
text-align:center;
margin:50px 0;
`;
const Wrap = styled.div`
width:90%;
display:flex;

table{
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    line-height:35px;

.height {
   height: 400px;
}
th{
     border-bottom: 1px solid #000;
     text-align:center;
}

td{
    text-align:left;
    border-bottom: 1px solid #000;
    height: 50px;
}
    
}


`;
const Footer = styled.div`

display:flex;
margin-bottom:20px;

>Button {
    margin:30px 10px;
};

`;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Container
    ,Title
    ,Wrap
    ,Footer
};