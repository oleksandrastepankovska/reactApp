import React from 'react';

import {
    Wrap,
    Title,
    WorkspaceWrap,
    List,
    Top,
    Mid,
    Bottom,
    WorkspaceTitle,
    Info,
    InfoTop,
    Date,
} from './styles';

const WORKSPACES_ITEMS = [
    {
        imgUrl: 'https://picsum.photos/130',
        text: 'Client contract',
        type: 'Contract',
        usersCont: 150,
        date: '07 Jan 2020',
        lastUpdate: 'Last update 2 days ago',
        id: 0,
    },
    {
        imgUrl: 'https://picsum.photos/130',
        text: 'Client contract',
        type: 'Contract',
        usersCont: 150,
        date: '07 Jan 2020',
        lastUpdate: 'Last update 2 days ago',
        id: 1,
    },
    {
        imgUrl: 'https://picsum.photos/130',
        text: 'Client contract',
        type: 'Contract',
        usersCont: 150,
        date: '07 Jan 2020',
        lastUpdate: 'Last update 2 days ago',
        id: 2,
    },
    // {
    //     imgUrl: 'https://picsum.photos/130',
    //     text: 'Client contract',
    //     type: 'Contract',
    //     usersCont: 150,
    //     date: '07 Jan 2020',
    //     lastUpdate: 'Last update 2 days ago',
    //     id: 3,
    // },
    // {
    //     imgUrl: 'https://picsum.photos/130',
    //     text: 'Client contract',
    //     type: 'Contract',
    //     usersCont: 150,
    //     date: '07 Jan 2020',
    //     lastUpdate: 'Last update 2 days ago',
    //     id: 4,
    // },
];

interface WorkspaceProps {
    key: number,
    imgUrl: string,
    text: string,
    type: string,
    usersCont: number,
    date: string,
    lastUpdate: string,
}

const Workspace: React.FC <WorkspaceProps> = ({ imgUrl, text, type, usersCont, date, lastUpdate }) => (
    <WorkspaceWrap>
        <Top src={imgUrl} alt="" />
        <Mid />
        <Bottom>
            <WorkspaceTitle>{text}</WorkspaceTitle>
            <Info>
                <InfoTop>{type} . {usersCont} users</InfoTop>
                <Date>{date}</Date>
            </Info>
        </Bottom>
    </WorkspaceWrap>
);

const Workspaces: React.FC = () => {
    return (
        <Wrap>
            <Title>Workspaces</Title>
            <List>
                {WORKSPACES_ITEMS.map(item => (
                    <Workspace
                        key={item.id}
                        imgUrl={item.imgUrl}
                        text={item.text}
                        type={item.type}
                        usersCont={item.usersCont}
                        date={item.date}
                        lastUpdate={item.lastUpdate}
                    />
                ))}
            </List>
        </Wrap>
    );
};

export default Workspaces;