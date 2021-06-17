import React, {FC} from 'react';
import { LatestPublications } from './Publications/index';
import Comments from './Comments';
import Workspaces from './Workspaces';

interface IHomePage{
    user:{
        id:number
    }
}

const HomePage: React.FC<IHomePage> = (props) => {
    return(
        <div>
            <LatestPublications id = {props.user.id}/>
            <Workspaces />
            <Comments id = {props.user.id}/>
        </div>
    );
};

export default HomePage;
