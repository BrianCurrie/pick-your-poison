import CardVote from './CardVote';
import ToggleView from './ToggleView';
import Loading from './Loading';
import style from './MobileSwipe.module.css';

export default function MobileSwipe(props) {
    return (
        <div className={style.swipe_view}>
            {props.isLoading ? <Loading /> : null}
            <ToggleView
                display={props.display}
                onToggleViewClick={props.onToggleViewClick}
            />
            {props.cocktailCards}
            <CardVote dislike={props.dislike} like={props.like} />
        </div>
    );
}
