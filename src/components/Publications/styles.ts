import styled from 'styled-components';
import Icons from '../../assets/index';

export const PublicationsWrap = styled.div`
    display: flex;
    width: 980px;
    height: 300px;
    border-radius: 4.5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin-bottom: 10px;
`;

export const Left = styled.div`
    width: 320px;
    background-image: url(https://picsum.photos/320?grayscale);
    color: #fff;
    padding: 25px 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const LeftText = styled.div`
    font-size: 15px;
    font-weight: 500;
`;

export const LeftInfo = styled.div`
    display: flex;
`

export const LeftInfoDate = styled.div`
    margin-right: 5px;
`;

export const LeftInfoUser = styled.div``;

export const Right = styled.div`
    padding: 5px 30px 6px 15px;
`;

export const RightTitle = styled.div`
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 500;
`;

export const SmallPublication = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

export const SmallPublicationText = styled.div``;

export const SmallPublicationImg = styled.img`
    margin-right: 10px;
    height: 65px;
    width: 65px;
`;

export const SmallPublicationInfo = styled.div`
    display: flex;
    font-size: 11px;
`;

export const SmallPublicationInfoDate = styled.div`
    margin-right: 10px;
`;

export const SmallPublicationInfoUser = styled.div``;

export const SeeMore = styled.div`
    color: purple;
    font-size: 16px;
`;
