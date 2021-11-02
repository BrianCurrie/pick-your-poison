import CardVote from './CardVote';
import ToggleView from './ToggleView';
import Loading from './Loading';
import './MobileSwipe.css';

export default function MobileSwipe(props) {
    return (
        <div className="mobileSwipe">
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
