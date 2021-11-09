import { Component } from 'react';
import CocktailCard from './CocktailCard';
import MobileSwipe from './MobileSwipe';
import MobileLiked from './MobileLiked';
import LikedCard from './LikedCard';

export default class MobileDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementsLoaded: 0,
            loading: true,
            display: 'cocktails', //cocktails, cocktailList, cocktailLiked
            displayCocktail: null,
        };
        this.onCardLoad = this.onCardLoad.bind(this);
        this.onToggleViewClick = this.onToggleViewClick.bind(this);
        this.onLikedBtnClick = this.onLikedBtnClick.bind(this);
        this.onBackBtnClick = this.onBackBtnClick.bind(this);
        this.onDeleteCocktail = this.onDeleteCocktail.bind(this);
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

    onLikedBtnClick(cardData) {
        this.setState({ display: 'cocktailLiked' });
        this.setState({ displayCocktail: cardData });
    }

    onBackBtnClick() {
        this.setState({ display: 'cocktailList' });
    }

    onDeleteCocktail(id) {
        this.props.deleteCocktail(id);
        this.setState({ display: 'cocktailList' });
    }

    render() {
        let zIndex = 3;
        const cocktailCards = [...this.props.cocktailStack].map((drink) => (
            <CocktailCard
                key={drink.id}
                cardInfo={drink}
                zIndex={zIndex--}
                onCardLoad={this.onCardLoad}
                swiping={true}
            />
        ));

        switch (this.state.display) {
            case 'cocktails':
                return (
                    <MobileSwipe
                        isLoading={this.state.loading}
                        display={this.state.display}
                        onToggleViewClick={this.onToggleViewClick}
                        likedList={this.props.likedList}
                        cocktailCards={cocktailCards}
                        like={this.props.like}
                        dislike={this.props.dislike}
                        favorite={this.props.favorite}
                    />
                );
            case 'cocktailList':
                return (
                    <MobileLiked
                        isLoading={this.state.loading}
                        display={this.state.display}
                        onToggleViewClick={this.onToggleViewClick}
                        onLikedBtnClick={this.onLikedBtnClick}
                        likedList={this.props.likedList}
                    />
                );
            case 'cocktailLiked':
                return (
                    <LikedCard
                        display={this.state.display}
                        onToggleViewClick={this.onToggleViewClick}
                        onBackBtnClick={this.onBackBtnClick}
                        cardInfo={this.state.displayCocktail}
                        deleteCocktail={this.onDeleteCocktail}
                    />
                );
            default:
                return;
        }
    }
}
