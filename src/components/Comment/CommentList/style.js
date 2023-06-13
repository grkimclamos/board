import styled from "styled-components";
const Container = styled.div`
width:90%;
height:40px;
display:flex;
align-items:center;
justify-content: space-between;
border-bottom: 1px solid #000;
padding:0 50px;

:last-child{
    border-bottom: 2px solid #000;
}
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Container
};