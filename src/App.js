import { React, Component } from 'react';
import MobileDisplay from './components/MobileDisplay';
import DesktopDisplay from './components/DesktopDisplay';
import GetRandomCocktail from './api/GetRandomCocktail';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            width: 0,
            height: 0,
            mobileWidthBreakpoint: 1000,
            stackSize: 3,
            cocktailStack: [],
            likedCocktails: [],
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.likeCocktail = this.likeCocktail.bind(this);
        this.dislikeCocktail = this.dislikeCocktail.bind(this);
        this.removeCurrentCocktail = this.removeCurrentCocktail.bind(this);
    }

    componentDidMount() {
        this.getInitialCocktails();

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    getInitialCocktails() {
        let stack = [];

        for (let i = 0; i < this.state.stackSize; i++) {
            stack.push(GetRandomCocktail());
        }

        Promise.all(stack).then((data) => {
            this.setState({ cocktailStack: data });
        });
    }

    likeCocktail() {
        //Handle Duplicates
        const currentCocktail = this.state.cocktailStack[0];
        this.setState({
            likedCocktails: [...this.state.likedCocktails, currentCocktail],
        });
        this.removeCurrentCocktail();
    }

    dislikeCocktail() {
        this.removeCurrentCocktail();
    }

    removeCurrentCocktail() {
        const stack = [...this.state.cocktailStack];
        stack.shift();
        GetRandomCocktail()
            .then((cocktail) => stack.push(cocktail))
            .then(() => this.setState({ cocktailStack: stack }));
    }

    render() {
        console.log(this.state.likedCocktails);
        return this.state.width > this.state.mobileWidthBreakpoint ? (
            <DesktopDisplay />
        ) : (
            <MobileDisplay
                cocktailStack={this.state.cocktailStack}
                dislike={this.dislikeCocktail}
                like={this.likeCocktail}
                stackSize={this.state.stackSize}
                likedList={this.state.likedCocktails}
            />
        );
    }
}

export default App;
