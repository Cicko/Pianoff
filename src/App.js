import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import {Body, Header} from "./app/containers";
import { TranslationManager } from './lib/services'

function App() {

    const language = 'english'

    return (
        <Router>
            <div className="App">
                <TranslationManager.Context.Provider
                    value={TranslationManager.t(language)}
                >
                    <Header activeItem="home"/>
                    <Body/>
                </TranslationManager.Context.Provider>
            </div>
        </Router>
);
}

export default App;
