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
            stackSize: 10,
            cocktailStack: [],
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        let stack = [];

        for (let i = 0; i < this.state.stackSize; i++) {
            stack.push(GetRandomCocktail());
        }

        Promise.all(stack).then((data) => {
            this.setState({ cocktailStack: data });
        });

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
