import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/pick-your-poison" element={<App />} />
                <Route
                    path="/pick-your-poison/:id"
                    element={<App share={true} />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
