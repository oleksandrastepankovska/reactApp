import {ChangeEvent, FC, useState} from 'react';
import { useSelector } from 'react-redux';
import Icons from '../../../assets';
import { IState } from '../../../reducers';
import { IPhotoReducer } from '../../../reducers/PhotoReducers';
import * as S from './SingleEntity/styles';
import SingleEntity from './SingleEntity'
import useDropdown from 'react-dropdown-hook';
import { FilterComp } from './Filter'
import ENTITIES_ITEMS from '../../common/EntitiesItems'


export enum View {
	Mosaic = 'mosaic',
	List = 'list',
}

export interface IListOrMosaicProps {
	view: View;
}

const Entities: FC = () =>{
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
      }))
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const [isFullscreen,setToggleFullscreen]= useState(false);
    const [active,setActive]= useState(false);
    const [view,setView]= useState<View>(View.Mosaic);
    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        const text= e.target.value;
        setInputText(text);
    };
    const toggleMosaic = () => {
		setView(View.Mosaic);
	};
    const toggleList = () => {
		setView(View.List);
	};
    const entitiesList = ENTITIES_ITEMS
        .filter((entity) =>
              entity.title.toLowerCase().includes(inputText.toLowerCase()))
        .map((entity,id) => (
                <SingleEntity
                key={id}
                title={entity.title}
                text = {entity.text}
                imgUrl = {photoList[id]?photoList[id].url:''}/>
            ));

    return(
        <S.EntitiesPageWrapper isFullsceen = {isFullscreen}>
            <S.EntitiesHeader>
                <S.EntitiesHeaderItem>Entities</S.EntitiesHeaderItem>
                <S.EntitiesHeaderRight>
                    <S.MosaicBtn view = {view} onClick ={toggleMosaic}><span>Mosaic</span></S.MosaicBtn>
                    <S.ListBtn view = {view} onClick ={toggleList}/>
                </S.EntitiesHeaderRight>
            </S.EntitiesHeader>
            <S.EntitiesHeader>
                <S.EntitiesHeaderLeft >
                    <S.All beforeImg = {Icons.allIcon} afterImg = {Icons.arrowDownIcon} active = {active} onClick = {() => setActive((prevToggle => !prevToggle))}>All</S.All>
                    <S.Dots/>
                    <S.Sort beforeImg = {Icons.sortIcon}>Sort</S.Sort>
                    <S.DropdownWrapper ref={wrapperRef}>
                        <S.Filter beforeImg = {Icons.filterIcon} onClick={toggleDropdown}>Filter</S.Filter>
                        {dropdownOpen && <FilterComp/>}
                    </S.DropdownWrapper>
                    
                    <S.Full onClick = {() => setToggleFullscreen((prevToggle => !prevToggle))}/>
                    <S.Share beforeImg = {Icons.shareIcon} onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                         alert("Link copied to the clipboard!");}}>Share</S.Share>
                </S.EntitiesHeaderLeft>
                <S.EntitiesHeaderRight>
                <S.Form>
                <S.Input type="text" placeholder = "Search..." value={inputText} onChange={inputHandler}></S.Input>
                <S.Button type="submit"><img alt ="" src={Icons.searchIcon} /></S.Button>
                </S.Form>
                <S.Followed beforeImg = {Icons.followedIcon} afterImg = {Icons.arrowDownIcon} border>Followed</S.Followed>
                </S.EntitiesHeaderRight>
            </S.EntitiesHeader>
            <S.EntitesWrapper view = {view} >{entitiesList}</S.EntitesWrapper>
        </S.EntitiesPageWrapper>
    );
};

export default Entities;
