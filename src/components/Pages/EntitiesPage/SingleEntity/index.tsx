import { FC, useState } from 'react';
import * as S from './styles';
import { View } from '../index'

interface SingleEntityProps {
    title: string,
    text: string,
    imgUrl:string,
}

const SingleEntity: FC<SingleEntityProps> = (props) =>{
    const {title, text, imgUrl} = props;
    const [view,setView]= useState<View>(View.List);
    return(
        <S.SingleEntityInner view = {view}>
            <S.EntityPhoto imgUrl={imgUrl}/>
            <S.EntityInfo>
                <S.SingleEntityTitle>{title}</S.SingleEntityTitle>
                <S.SingleEntityText>{text}</S.SingleEntityText>
            </S.EntityInfo>
        </S.SingleEntityInner>
        
    );
};

export default SingleEntity;
