import React, {FC} from 'react';
import { WorkspacesComments} from '../Comments'
import {MainWrapper} from '../styles'
import { useSelector } from 'react-redux';
import { IState } from '../../../../reducers';
import { IPhotoReducer } from '../../../../reducers/PhotoReducers';
import Icons from '../../../../assets';
import {CorporateMetters} from '../CorporateMetters'
import {WorkspaceHeader} from '../Header'
interface IWorkspace{
    user:{
        id:number
    }
}
export const Corporate: FC<IWorkspace> = props =>{
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
      }))
    return(
        <MainWrapper>
            <WorkspaceHeader 
            BgimgUrl={photoList[43]?.url?photoList[43].url:''}
            icon = {Icons.entities2Icon}
            title = 'Corporate'
            text = 'Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new of have poor memory.'
            />
            <CorporateMetters/>
            < WorkspacesComments id = {props.user.id}></WorkspacesComments>
        </MainWrapper>
         
    );
};