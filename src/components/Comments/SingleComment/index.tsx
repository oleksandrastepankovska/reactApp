import Icons from '../../../assets/index'
import * as S from './styles';

interface SingleCommentProps {
	title: string,
	text: string,
	companyName: string,
	commentType:string,
	smallIcon: string,
	logo:string,
	date: number,
}

const SingleComment: React.FC<SingleCommentProps> = (props) => {

	const {title, text, companyName,commentType,smallIcon,logo, date} = props;

	return(
		<S.SingleCommentWrapper>
           <S.SingleCommentTitle>{title}</S.SingleCommentTitle>
           <S.SingleCommentText>{text}</S.SingleCommentText>
            <S.CommentInfo>
                <S.CommentIcon style = {{backgroundImage: `url(${logo})`}}/>
                <S.SmallText>{companyName}</S.SmallText>
                <S.CommentIcon style = {{backgroundImage: `url(${smallIcon})`}}></S.CommentIcon>
                <S.SmallText>{commentType}</S.SmallText>
                <S.Update>Last update {date} days ago</S.Update>
            </S.CommentInfo>
        </S.SingleCommentWrapper>
	);
};

export default SingleComment;
