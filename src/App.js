import React from 'react';
import './App.css';
import {Header} from "./app/containers";
import { TranslationManager } from './lib/services'

function App() {

    const language = 'english'

    return (
    <div className="App">
        <TranslationManager.Context.Provider
            value={TranslationManager.t(language)}
        >
            <Header activeItem="home"/>
        </TranslationManager.Context.Provider>
    </div>
);
}

export default App;
