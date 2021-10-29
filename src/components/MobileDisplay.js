import { Component } from 'react';
import CocktailCard from './CocktailCard';
import CardVote from './CardVote';
import ToggleView from './ToggleView';
import Loading from './Loading';
import LikedCocktails from './LikedCocktails';
import './MobileDisplay.css';

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
        const cocktails = [...this.props.cocktailStack].map((drink) => (
            <CocktailCard
                key={drink.id}
                cardInfo={drink}
                zIndex={zIndex--}
                onCardLoad={this.onCardLoad}
            />
        ));

        let content;
        if (this.state.display === 'cocktails') {
            content = (
                <div className="mobileDisplay">
                    {this.state.loading ? <Loading /> : null}
                    <ToggleView
                        display={this.state.display}
                        onToggleViewClick={this.onToggleViewClick}
                    />
                    {cocktails}
                    <CardVote
                        dislike={this.props.dislike}
                        like={this.props.like}
                    />
                </div>
            );
        } else {
            content = (
                <div className="mobileDisplay">
                    {this.state.loading ? <Loading /> : null}
                    <ToggleView
                        display={this.state.display}
                        onToggleViewClick={this.onToggleViewClick}
                    />
                    <LikedCocktails likedList={this.props.likedList} />
                </div>
            );
        }

        return content;
    }
}
