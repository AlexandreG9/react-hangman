import React from 'react';
import './App.css';
import AppStyle from './App.module.css';
import MysteryWord from "./components/MysteryWord";
import Input from "./components/Input";
import ProposedLetters from "./components/ProposedLetters";
import HangmanImage from "./components/HangmanImage";
import Modal from 'react-modal';
import appModalStyle from './AppModal.module.css';
import Confetti from 'react-confetti';
import {wordList} from "./WordList";

type AppState = {
    mysteryWord: string,
    proposedLetters: Array<string>,
    failedCount: number,
    win: boolean,
    gameEnded: boolean,
};

type GetModalHeaderProps = {
    win: boolean
};
const GetModalHeader = (props: GetModalHeaderProps) => {
    if (props.win) {
        return <h1>Bien joué 🤙</h1>
    } else {
        return <h1>C'est perdu 😭😭😭</h1>
    }

}

class App extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props);
        const wordIndex = Math.floor(Math.random() * 35) - 1;
        this.state = {
            proposedLetters: [],
            mysteryWord: wordList[wordIndex],
            failedCount: 0,
            win: false,
            gameEnded: false,
        }
    }

    checkIfFailed = (letter: string): void => {
        if (!Array.from(this.state.mysteryWord).includes(letter)) {
            const newCount = this.state.failedCount + 1
            this.setState({failedCount: newCount}, () => {
                if (this.state.failedCount === 10) {
                    this.setState({win: false, gameEnded: true})
                }
            })
        }
    }

    handleInputWord = (letter: string) => {
        if (this.state.failedCount < 10) {
            this.updateProposedLetters(letter);
        }

    }

    handleCloseModal = () => {
        this.setState({win: false})
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    private updateProposedLetters(letter: string) {
        if (!this.state.proposedLetters.includes(letter)) { // If letter exists
            const newProposedLetters = [...this.state.proposedLetters, letter]
            this.setState({proposedLetters: newProposedLetters}, () => {
                // Check if win
                const mysteryWordArray = Array.from(this.state.mysteryWord)
                console.log(mysteryWordArray
                    .map(letter => console.log(letter + this.state.proposedLetters.includes(letter))))
                const win = mysteryWordArray
                    .map(letter => this.state.proposedLetters.includes(letter))
                    .reduce((a, b) => {
                        return a && b
                    })

                if (win) {
                    this.setState({win: true, gameEnded: true})
                }
            })
            this.checkIfFailed(letter)
            return true
        }
    }

    render() {
        return (
            <div className="App">
                <h1 className={AppStyle.title}>Pendu</h1>
                <MysteryWord word={this.state.mysteryWord} proposedLetters={this.state.proposedLetters}/>
                <Input handleInsertLetter={this.handleInputWord}/>
                <ProposedLetters proposedLetters={this.state.proposedLetters} mysteryWord={this.state.mysteryWord}/>
                <HangmanImage tryCount={this.state.failedCount}/>
                <Confetti
                    run={this.state.win}
                />
                <Modal isOpen={this.state.gameEnded} contentLabel="Example Modal"
                       className={appModalStyle.modal}
                       overlayClassName={appModalStyle.overlay}>
                    <GetModalHeader win={this.state.win}/>
                    <h3>Le mot était {this.state.mysteryWord}</h3>
                    <button onClick={this.handleCloseModal} className={appModalStyle.btn}>Relancer une partie</button>
                </Modal>
            </div>
        );
    }
}

export default App;
