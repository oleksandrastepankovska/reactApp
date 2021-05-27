import styled from 'styled-components';
import Icon from '../../../assets/index';

export const SingleCommentWrapper = styled.div`
    background-color: #fff;
    margin-bottom: 20px;
    padding: 10px 15px;
    border-radius: 4.5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;
export const SingleCommentTitle = styled.div`
    color:#2a3f9d;
    font-size: 20px;
    font-weight: 500;
    margin-bottom:10px;
    
`;

export const CommentInfo = styled.div`
    color: #b4b7ba;
    display: flex;
    font-size: 14px;

`;

export const CommentIcon = styled.div`
    width: 20px;
    height: 20px;
    background: url(${Icon.commentsIcon});
    background-position:center;
    background-repeat: no-repeat;
    margin-right: 5px;
`;
export const SingleCommentText = styled.div`
    margin-bottom:10px;
    font-size: 16px;
`;
export const CommentsWrapper = styled.div`
    width: 982px;
    margin:10px 0;
`;

export const SmallText = styled.div``;

export const Update = styled.div`
    font-size: "14px"
;`

export const CommentsTitle = styled.div`
    padding-bottom: 50px;
    font-weight: 700;
    font-size: 22px;
    color: #4b5268;
`;

