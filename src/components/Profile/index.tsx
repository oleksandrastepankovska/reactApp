import React from 'react';
// styles
import { Wrapper, ProfileInfo, Avatar, Name, JobInfo } from './styles';

const Profile: React.FC = () => {
	return(
		<Wrapper>
				<ProfileInfo>
					<Avatar></Avatar>
					<Name></Name>
					<JobInfo></JobInfo>
				</ProfileInfo>
		</Wrapper>
	);
};

export default Profile;

