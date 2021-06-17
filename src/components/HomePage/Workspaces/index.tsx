import React from 'react';
import * as S from './styles';
import { SeeProfile } from '../../Header/Dropdown/styles';

const WORKSPACES_ITEMS = [
    {
        imgUrl: 'https://picsum.photos/130',
        path: '/ClientContract',
        text: 'Client contract',
        type: 'Contract',
        usersCont: 150,
        date: '07 Jan 2020',
        lastUpdate: 'Last update 2 days ago',
        id: 0,
    },
    {
        imgUrl: 'https://picsum.photos/130',
        path: '/SupplierContract',
        text: 'Supplier Contract',
        type: 'Contract',
        usersCont: 150,
        date: '07 Jan 2020',
        lastUpdate: 'Last update 2 days ago',
        id: 1,
    },
    {
        imgUrl: 'https://picsum.photos/130',
        path: '/Corporate',
        text: 'Corporate',
        type: 'Corporate',
        usersCont: 150,
        date: '07 Jan 2020',
        lastUpdate: 'Last update 2 days ago',
        id: 2,
    },
    {
        imgUrl: 'https://picsum.photos/130',
        path: '/RealEstateContracts',
        text: 'Real Estate Contracts',
        type: 'Contract',
        usersCont: 150,
        date: '07 Jan 2020',
        lastUpdate: 'Last update 2 days ago',
        id: 3,
    },
    {
        imgUrl: 'https://picsum.photos/130',
        path: '/ClientContract',
        text: 'Client contract',
        type: 'Contract',
        usersCont: 150,
        date: '07 Jan 2020',
        lastUpdate: 'Last update 2 days ago',
        id: 4,
    },
    {
        imgUrl: 'https://picsum.photos/130',
        path: '/GroupNorms',
        text: 'Group Norms',
        type: 'Contract',
        usersCont: 150,
        date: '07 Jan 2020',
        lastUpdate: 'Last update 2 days ago',
        id: 5,
    },
];

interface WorkspaceProps {
    key: number,
    imgUrl: string,
    path: string,
    text: string,
    type: string,
    usersCont: number,
    date: string,
    lastUpdate: string,
}

const Workspace: React.FC <WorkspaceProps> = ({ imgUrl, text, path, type, usersCont, date, lastUpdate }) => (
    <S.WorkspaceWrap>
        <S.Top src={imgUrl} alt="" />
        <S.Mid />
        <S.Bottom>
            <S.WorkspaceTitle><a href={path} >{text}</a></S.WorkspaceTitle>
            <S.Info>
                <S.InfoTop>{type} . {usersCont} users</S.InfoTop>
                <S.Date>{date}</S.Date>
            </S.Info>
        </S.Bottom>
    </S.WorkspaceWrap>
);


const Workspaces: React.FC = () => {
    return (
        <S.Wrap>
            <S.Title>Workspaces</S.Title>
                <S.List>
                    {WORKSPACES_ITEMS.map(item => (
                        <Workspace
                            key={item.id}
                            path={item.path}
                            imgUrl={item.imgUrl}
                            text={item.text}
                            type={item.type}
                            usersCont={item.usersCont}
                            date={item.date}
                            lastUpdate={item.lastUpdate}
                        />
                    ))}
                </S.List>
        </S.Wrap>
    );
};

export default Workspaces;