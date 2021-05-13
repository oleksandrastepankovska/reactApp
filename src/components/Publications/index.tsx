import React from 'react';
// styles
import * as S from './styles';


const PUBLICATION_ITEMS = [
    {
        imgUrl: 'https://picsum.photos/65',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
        userName:'John Doe',
        date: '07 Jan 2020',
    },
    {
        imgUrl: 'https://picsum.photos/65',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
        userName: 'John Doe',
        date: '07 Jan 2020',
    },
    {
        imgUrl: 'https://picsum.photos/65',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo',
        userName: 'John Doe',
        date: '07 Jan 2020',
    },
];

const Publications: React.FC = () => {
    return (
        <S.PublicationsWrap>
            <S.Left>
                <S.LeftText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                </S.LeftText>
                <S.LeftInfo>
                    <S.LeftInfoDate>7 jan 2020</S.LeftInfoDate>
                    <S.LeftInfoUser>John Doe</S.LeftInfoUser>
                </S.LeftInfo>
            </S.Left>
            <S.Right>
                <S.RightTitle>Latest Publications</S.RightTitle>
                {PUBLICATION_ITEMS.map(({ imgUrl, text, userName, date }) => 
                    <S.SmallPublication>
                        <S.SmallPublicationImg src={imgUrl} alt="" />
                        <div>
                            <S.SmallPublicationText>
                                {text}
                            </S.SmallPublicationText>
                            <S.SmallPublicationInfo>
                                <S.SmallPublicationInfoDate>{date}</S.SmallPublicationInfoDate>
                                <S.SmallPublicationInfoUser>{userName}</S.SmallPublicationInfoUser>
                            </S.SmallPublicationInfo>
                        </div>
                    </S.SmallPublication>
                )}
                <S.SeeMore>See more publictions</S.SeeMore>
            </S.Right>
        </S.PublicationsWrap>
    )
}

export default Publications;