import React from 'react';
import './App.css';
import MysteryWord from "./components/MysteryWord";

function App() {
    return (
        <div className="App">
            <h1>Pendu</h1>
            <MysteryWord word={'arbre'} proposedLetters={['a', 'b']}/>
        </div>
    );
}

export default App;
