import React from 'react';
import MobileDisplay from './components/MobileDisplay';
import DesktopDisplay from './components/DesktopDisplay';
import './App.css';

function App() {
    return window.innerWidth > 1000 ? <DesktopDisplay /> : <MobileDisplay />;
}

export default App;
