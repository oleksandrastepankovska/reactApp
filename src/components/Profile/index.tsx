import React from 'react';
import avatar from '../../assets/face.svg';
import networkLogo from '../../assets/network.png';
import networPlusLogo from '../../assets/network.svg';
import publicationsLogo from '../../assets/publications.svg';
import publicationsPlusLogo from '../../assets/plus.svg';
import Publications from '/Users/saskasaska/Desktop/frameworkReact/my-app/src/components/common/Publications'
import {
	Link
  } from "react-router-dom";
// styles
import { Wrapper, ProfileInfo, Avatar, Name, JobInfo, NetworkInfo, PublicationsInfo, OtherOptions,  Ecosystem, Entities, StyledLink } from './styles';

const Profile: React.FC = () => {
	return(
		<Wrapper>
				<ProfileInfo>
					<Avatar src={avatar} />
					<Name>
						Humberta Swift
					</Name>
					<JobInfo>
						Job Title - Company
					</JobInfo>
					<NetworkInfo>
						<img src={networkLogo} />
						<StyledLink to="/network">Your Network</StyledLink>
						<img src={networPlusLogo} />
					</NetworkInfo>
					<PublicationsInfo>
						<img src={publicationsLogo} />
						<StyledLink to="/publications">Your Publications</StyledLink>
						<img src={publicationsPlusLogo} />
					</PublicationsInfo>
				</ProfileInfo>
				{/* <OtherOptions>
					<Publications></Publications>
					<Ecosystem></Ecosystem>
					<Entities></Entities>
				</OtherOptions> */}
		</Wrapper>
	);
};

export default Profile;

