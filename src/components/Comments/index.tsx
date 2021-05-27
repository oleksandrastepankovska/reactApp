import Icons from '../../assets/index';
import SingleComment from '../Comments/SingleComment'
import COMMENT_ITEMS from '../common/CommentItems'

//styles
import {CommentsTitle, CommentsWrapper} from './SingleComment/styles';





const Comments: React.FC = () =>{
    const comments = COMMENT_ITEMS
    .map((comment, index) =>(
        <SingleComment
            key = {index}
            title = {comment.title}
            text = {comment.text}
            companyName = {comment.companyName}
            commentType = {comment.commentType}
            logo = {comment.logo}
            smallIcon = {comment.smallIcon}
            date = {comment.date}

        />
    ));
    return(
        <CommentsWrapper>
            <CommentsTitle>Resume your work</CommentsTitle>
            {comments}
        </CommentsWrapper>
    );
};

export default Comments;
