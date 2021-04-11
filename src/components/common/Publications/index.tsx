import React from 'react';
import publicationsLogo from '../../../assets/publications.svg'
// styles
import { Publication } from './styles';

const Publications: React.FC = () => {
	return(		
        <Publication>
            <img  src={publicationsLogo} />
            <p>Publications</p>
        </Publication>
	);
};

export default Publications;
