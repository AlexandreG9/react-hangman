import React from 'react';
import './App.css';
import MysteryWord from "./components/MysteryWord";
import Input from "./components/Input";

type AppProps = {};
type AppState = {
    mysteryWord: string,
    proposedLetters: Array<string>,
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {proposedLetters: [], mysteryWord: "arbre".toUpperCase()}
    }

    handleInputWord = (letter: string): boolean => {
        const newProposedLetters = [...this.state.proposedLetters, letter]
        this.setState({proposedLetters: newProposedLetters})

        return true
    }

    render() {
        return (
            <div className="App">
                <h1>Pendu</h1>
                <MysteryWord word={this.state.mysteryWord} proposedLetters={this.state.proposedLetters}/>
                <Input handleInsertLetter={this.handleInputWord}/>
            </div>
        );
    }
}

export default App;
