
// CSS imports needed for the HTML Theme Goeveni
import './assets/css/responsive.css'
import './assets/css/style.css'
import './assets/css/datepicker.min.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/vendor/OwlCarousel/assets/owl.carousel.css'
import './assets/vendor/OwlCarousel/assets/owl.theme.default.min.css'

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
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
