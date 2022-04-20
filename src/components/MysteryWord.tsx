import React from 'react';
import MysteryStyle from './MysteryWord.module.css';

interface MysteryWordProps {
    word: string
    proposedLetters: Array<string>
}

function convertMysteryWord(word: string, proposedLetters: Array<string>): string {
    return Array.from(word).map(x => proposedLetters.includes(x) ? x : '_').join(' ')
}

function MysteryWord(props: MysteryWordProps) {
    return (
        <div className={MysteryStyle.mysteryWord}>
            <p>{convertMysteryWord(props.word, props.proposedLetters)}</p>
        </div>
    );
}

export default MysteryWord;