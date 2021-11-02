import ToggleView from './ToggleView';
import Loading from './Loading';
import LikedCocktails from './LikedCocktails';
import './MobileLiked.css';

export default function MobileLiked(props) {
    return (
        <div className="mobileLiked">
            {props.isLoading ? <Loading /> : null}
            <ToggleView
                display={props.display}
                onToggleViewClick={props.onToggleViewClick}
            />
            <LikedCocktails likedList={props.likedList} />
        </div>
    );
}
