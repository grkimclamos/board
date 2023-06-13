import Style from "./style";
const CommentList = ({comment}) => {
    return(
    <Style.Container>
        <div>{comment.writer}</div>
        <div>{comment.content}</div>
        <div>{comment.date}</div>
    </Style.Container>
    );
};

export default CommentList;