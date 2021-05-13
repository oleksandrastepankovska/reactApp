import React from 'react';
import Icons from '../../assets/index';
import * as S from './styles';

const Profile: React.FC = () => {
	return(
		<S.Wrapper>
			<S.ProfileInfo>
				<S.Avatar src={Icons.userIcon} />
				<S.Name>
					Humberta Swift
				</S.Name>
				<S.JobInfo>
					Job Title - Company
				</S.JobInfo>
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
			{/* <OtherOptions>
				<Publications></Publications>
				<Ecosystem></Ecosystem>
				<Entities></Entities>
			</OtherOptions> */}
		</S.Wrapper>
	);
};

export default Profile;

