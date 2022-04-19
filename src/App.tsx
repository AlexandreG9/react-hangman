import React from 'react';
import './App.css';
import MysteryWord from "./components/MysteryWord";
import Input from "./components/Input";
import ProposedLetters from "./components/ProposedLetters";
import HangmanImage from "./components/HangmanImage";

type AppProps = {};
type AppState = {
    mysteryWord: string,
    proposedLetters: Array<string>,
    failedCount: number
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            proposedLetters: [],
            mysteryWord: "arbre".toUpperCase(),
            failedCount: 9
        }
    }

    checkIfFailed = (letter: string): void => {
        if (!Array.from(this.state.mysteryWord).includes(letter)) {
            const newCount = this.state.failedCount + 1
            this.setState({failedCount: newCount})
        }
    }

    handleInputWord = (letter: string) => {
        if (this.state.failedCount < 10) {
            this.updateProposedLetters(letter);
        }

    }

    private updateProposedLetters(letter: string) {
        if (!this.state.proposedLetters.includes(letter)) { // If letter exists
            const newProposedLetters = [...this.state.proposedLetters, letter]
            this.setState({proposedLetters: newProposedLetters},  () => {
                // Check if win
                const mysteryWordArray = Array.from(this.state.mysteryWord)
                console.log(mysteryWordArray
                    .map(letter => console.log(letter +  this.state.proposedLetters.includes(letter))))
                const win = mysteryWordArray
                    .map(letter => this.state.proposedLetters.includes(letter))
                    .reduce((a, b) => {
                        return a && b
                    })

                if(win) {
                    console.log('you win !')
                } else {
                    console.log('not yet')
                }
            })
            this.checkIfFailed(letter)
            return true
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Pendu</h1>
                <MysteryWord word={this.state.mysteryWord} proposedLetters={this.state.proposedLetters}/>
                <Input handleInsertLetter={this.handleInputWord}/>
                <ProposedLetters proposedLetters={this.state.proposedLetters} mysteryWord={this.state.mysteryWord}/>
                <HangmanImage tryCount={this.state.failedCount}/>
            </div>
        );
    }
}

export default App;
