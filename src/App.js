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
        this.favoriteCocktail = this.favoriteCocktail.bind(this);
        this.removeCurrentCocktail = this.removeCurrentCocktail.bind(this);
        this.deleteCocktail = this.deleteCocktail.bind(this);
    }

    componentDidMount() {
        this.getInitialCocktails();

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        this.loadLocalStorage();
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

    loadLocalStorage() {
        try {
            this.setState({
                likedCocktails: localStorage.getItem('likedCocktails')
                    ? JSON.parse(localStorage.getItem('likedCocktails'))
                    : [],
            });
        } catch (err) {
            console.log(err);
            this.setState({
                likedCocktails: [],
            });
        }
    }

    updateLocalStorage() {
        localStorage.setItem(
            'likedCocktails',
            JSON.stringify(this.state.likedCocktails)
        );
    }

    likeCocktail() {
        const currentCocktail = this.state.cocktailStack[0];
        const currentCocktailID = currentCocktail.id;
        let isDuplicate = false;

        for (let cocktail of this.state.likedCocktails) {
            if (cocktail.id === currentCocktailID) {
                isDuplicate = true;
            }
        }

        if (!isDuplicate) {
            this.setState(
                {
                    likedCocktails: [
                        ...this.state.likedCocktails,
                        currentCocktail,
                    ],
                },
                () => {
                    this.updateLocalStorage();
                }
            );
        }

        this.removeCurrentCocktail();
    }

    dislikeCocktail() {
        this.removeCurrentCocktail();
    }

    favoriteCocktail() {
        let cocktailStack = this.state.cocktailStack;
        console.log('favoriting: ' + cocktailStack[0].name);
        cocktailStack[0].favorite = true;

        this.setState({ cocktailStack: cocktailStack }, () => {
            this.likeCocktail();
        });
    }

    deleteCocktail(id) {
        console.log('deleting: ID - ' + id);
        this.setState(
            {
                likedCocktails: this.state.likedCocktails.filter(
                    (cocktail) => cocktail.id !== id
                ),
            },
            () => {
                this.updateLocalStorage();
            }
        );
    }

    removeCurrentCocktail() {
        const stack = [...this.state.cocktailStack];
        stack.shift();
        GetRandomCocktail()
            .then((cocktail) => stack.push(cocktail))
            .then(() => this.setState({ cocktailStack: stack }));
    }

    render() {
        return this.state.width > this.state.mobileWidthBreakpoint ? (
            <DesktopDisplay />
        ) : (
            <MobileDisplay
                cocktailStack={this.state.cocktailStack}
                like={this.likeCocktail}
                dislike={this.dislikeCocktail}
                favorite={this.favoriteCocktail}
                stackSize={this.state.stackSize}
                likedList={this.state.likedCocktails}
                deleteCocktail={this.deleteCocktail}
            />
        );
    }
}

export default App;
