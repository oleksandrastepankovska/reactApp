import styled from 'styled-components';

export const Wrap = styled.div` 
    overflow: scroll;
    width: 980px;
    padding: 10px;
    margin: 10px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 15px;
`;

export const WorkspaceWrap = styled.div`
    margin-right: 10px;
    min-width: 250px;
    height: 200px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 4.5px;
    position: relative;
`;

export const List = styled.div`
    display: flex;
`;

export const Top = styled.img`
    width: 100%;
    height: 90px;
    border-radius: 4.5px;
`;

export const Mid = styled.div`
    display: flex;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 4.5px;
    position: absolute;
    top: 60px;
    left: 10px;
    width: 75px;
    height: 80px;
    z-index: 2;
    background-color: #fff;
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
`;


export const WorkspaceTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 15px;
    font-weight: 500;
    padding-right: 5px;
    padding-top: 10px;
    margin-bottom: 25px;
`;

export const Info = styled.div`
    padding: 0 15px;
`;

export const InfoTop = styled.div`
    margin-bottom: 3px;
`;

export const Date = styled.div`
    font-size: 10px;
`;
