import React from 'react';

import IndexPage from './pages/index';

function App() {
    return (
        <div className="App d-flex flex-column h-100">
            <header>
                <div className="container">
                    <h1>Hacker Stories</h1>
                </div>
            </header>
            <div className="flex-grow-1">
                <IndexPage/>
            </div>
            <footer>
                <div className="container text-center">
                    &copy; 2020 *****
                </div>
            </footer>
        </div>
    );
}

export default App;
