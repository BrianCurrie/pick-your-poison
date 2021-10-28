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
        //Add current cocktail to likedCocktails arr
        //Remove current cocktail from cocktail stack
        //so we can display a new one
    }

    dislikeCocktail() {
        //Remove current cocktail from stack, same as likeCocktail
    }

    render() {
        return this.state.width > this.state.mobileWidthBreakpoint ? (
            <DesktopDisplay />
        ) : (
            <MobileDisplay cocktailStack={this.state.cocktailStack} />
        );
    }
}

export default App;
