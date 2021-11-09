import CardVote from './CardVote';
import ToggleView from './ToggleView';
import Loading from './Loading';
import mobile from './MainMobile.module.css';

export default function MobileSwipe(props) {
    return (
        <div className={mobile.container}>
            {props.isLoading ? <Loading /> : null}
            <ToggleView
                display={props.display}
                onToggleViewClick={props.onToggleViewClick}
            />
            {props.cocktailCards}
            <CardVote
                like={props.like}
                dislike={props.dislike}
                favorite={props.favorite}
            />
        </div>
    );
}
