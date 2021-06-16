import React from 'react';
import Icons from '../../assets/index';
import * as S from './styles';

interface IAsideUser {
    user: {
        name:string,
        imgUrl:string,
        jobTitle: string,
        companyName: string
    }

}

const Profile: React.FC<IAsideUser> = (props) => {
	return(
		<S.Wrapper>
			<S.ProfileInfo>
				<S.Avatar src={props.user.imgUrl} />
				<S.Name>{props.user.name}</S.Name>
				<S.JobInfo>{props.user.jobTitle} - {props.user.companyName}</S.JobInfo>
				<S.NetworkInfo>
					<img src={Icons.networkIcon} />
					<S.StyledLink to="/network">Your Network</S.StyledLink>
					<img src={Icons.plusIcon} />
				</S.NetworkInfo>
				<S.PublicationsInfo>
					<img src={Icons.yourPublicationsIcon} />
					<S.StyledLink to="/publications">Your Publications</S.StyledLink>
					<img src={Icons.plusIcon} />
				</S.PublicationsInfo>
			</S.ProfileInfo>
		</S.Wrapper>
	);
};

export default Profile;

