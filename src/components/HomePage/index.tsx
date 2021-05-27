import React from 'react';
import Publications from '../Publications';
import Comments from '../Comments';
import Workspaces from '../Workspaces';


const HomePage: React.FC = () => {
    return(
        <div>
            <Publications />
            <Workspaces />
            <Comments/>
        </div>
    );
};

export default HomePage;
