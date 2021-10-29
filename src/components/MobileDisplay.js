import { Component } from 'react';
import CocktailCard from './CocktailCard';
import CardVote from './CardVote';
import ToggleView from './ToggleView';
import Loading from './Loading';
import './MobileDisplay.css';

export default class MobileDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementsLoaded: 0,
            loading: true,
        };
        this.onCardLoad = this.onCardLoad.bind(this);
    }

    onCardLoad() {
        let numLoaded = this.state.elementsLoaded + 1;
        this.setState({ elementsLoaded: numLoaded });
        if (numLoaded === this.props.stackSize) {
            this.setState({ loading: false });
        }
    }

    render() {
        let zIndex = 3;
        const cocktails = [...this.props.cocktailStack].map((drink) => (
            <CocktailCard
                key={drink.id}
                cardInfo={drink}
                zIndex={zIndex--}
                onCardLoad={this.onCardLoad}
            />
        ));
        return (
            <div className="mobileDisplay">
                <ToggleView />
                {this.state.loading ? <Loading /> : null}
                {cocktails}
                <CardVote dislike={this.props.dislike} like={this.props.like} />
            </div>
        );
    }
}
