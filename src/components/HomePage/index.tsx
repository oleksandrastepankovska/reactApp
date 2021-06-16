import React, {FC} from 'react';
import Publications from './Publications';
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
            <Publications />
            <Workspaces />
            <Comments id = {props.user.id}/>
        </div>
    );
};

export default HomePage;
