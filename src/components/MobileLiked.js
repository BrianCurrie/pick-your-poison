import ToggleView from './ToggleView';
import Loading from './Loading';
import LikedCocktails from './LikedCocktails';
import LikedNav from './LikedNav';
import mobile from './MainMobile.module.css';

export default function MobileLiked(props) {
    return (
        <div className={mobile.container}>
            {props.isLoading ? <Loading /> : null}
            <ToggleView
                display={props.display}
                onToggleViewClick={props.onToggleViewClick}
            />
            <LikedCocktails
                likedList={props.likedList}
                onLikedBtnClick={props.onLikedBtnClick}
            />
            <LikedNav liked={props.likedList} />
        </div>
    );
}
