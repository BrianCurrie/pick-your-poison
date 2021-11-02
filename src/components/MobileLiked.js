import ToggleView from './ToggleView';
import Loading from './Loading';
import LikedCocktails from './LikedCocktails';
import style from './MobileLiked.module.css';

export default function MobileLiked(props) {
    return (
        <div className={style.liked_view}>
            {props.isLoading ? <Loading /> : null}
            <ToggleView
                display={props.display}
                onToggleViewClick={props.onToggleViewClick}
            />
            <LikedCocktails likedList={props.likedList} />
        </div>
    );
}
