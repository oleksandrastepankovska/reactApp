import Icons from '../../../assets/index';

interface IComments {
    title: string,
    text: string,
    companyName: string,
    commentType:string,
    logo: string,
    smallIcon: string,
    date: number,
}

const COMMENT_ITEMS: IComments[] = [
    {
        title: 'Contract #45',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        companyName:'Subsid. corp.',
        commentType: 'Corporate',
        logo:`${Icons.adminIcon}`,
        smallIcon: `${Icons.contractIcon}`,
        date:  2,
    },
    {
        title: 'Contract #45',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        companyName:'Subsid. corp.',
        commentType: 'Corporate',
        logo:`${Icons.homeIcon}`,
        smallIcon: `${Icons.contractIcon}`,
        date:  2,
    },
    {
        title: 'Contract #45',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        companyName:'Subsid. corp.',
        commentType: 'Corporate',
        logo:`${Icons.contractIcon}`,
        smallIcon: `${Icons.contractIcon}`,
        date:  2,
    },
    {
        title: 'Contract #45',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        companyName:'Subsid. corp.',
        commentType: 'Corporate',
        logo:`${Icons.adminIcon}`,
        smallIcon: `${Icons.entities2Icon}`,
        date:  2,
    },
    {
        title: 'Contract #45',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        companyName:'Subsid. corp.',
        commentType: 'Corporate',
        logo:`${Icons.homeIcon}`,
        smallIcon: `${Icons.contractIcon}`,
        date:  2,
    },
    {
        title: 'Contract #45',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        companyName:'Subsid. corp.',
        commentType: 'Corporate',
        logo:`${Icons.homeIcon}`,
        smallIcon: `${Icons.contractIcon}`,
        date:  2,
    },
];

export default COMMENT_ITEMS;
