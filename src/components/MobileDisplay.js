import { Component } from 'react';
import CocktailCard from './CocktailCard';
import MobileSwipe from './MobileSwipe';
import MobileLiked from './MobileLiked';

export default class MobileDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementsLoaded: 0,
            loading: true,
            display: 'cocktails', //cocktails, cocktailList
        };
        this.onCardLoad = this.onCardLoad.bind(this);
        this.onToggleViewClick = this.onToggleViewClick.bind(this);
    }

    onCardLoad() {
        let numLoaded = this.state.elementsLoaded + 1;
        this.setState({ elementsLoaded: numLoaded });
        if (numLoaded === this.props.stackSize) {
            this.setState({ loading: false });
        }
    }

    onToggleViewClick() {
        if (this.state.display === 'cocktails') {
            this.setState({ display: 'cocktailList' });
        } else {
            this.setState({ display: 'cocktails' });
        }
    }

    render() {
        let zIndex = 3;
        const cocktailCards = [...this.props.cocktailStack].map((drink) => (
            <CocktailCard
                key={drink.id}
                cardInfo={drink}
                zIndex={zIndex--}
                onCardLoad={this.onCardLoad}
            />
        ));

        return this.state.display === 'cocktails' ? (
            <MobileSwipe
                isLoading={this.state.loading}
                display={this.state.display}
                onToggleViewClick={this.onToggleViewClick}
                likedList={this.props.likedList}
                cocktailCards={cocktailCards}
                dislike={this.props.dislike}
                like={this.props.like}
            />
        ) : (
            <MobileLiked
                isLoading={this.state.loading}
                display={this.state.display}
                onToggleViewClick={this.onToggleViewClick}
                likedList={this.props.likedList}
            />
        );
    }
}
