import React from 'react';

type MyProps = {
    proposedLetters: Array<string>,
    mysteryWord: string
};

const ProposedLetters = (props: MyProps) => {
    const cleanProposedLetters = Array.from(props.proposedLetters).length === 0 ? [''] : Array.from(props.proposedLetters)

    const letterList = cleanProposedLetters
        .sort()
        .map(letter => {
            const liClass = Array.from(props.mysteryWord).includes(letter) ? "good-letter" : "wrong-letter"
            return <li key={letter} className={liClass}>{letter}</li>
        })

    return (
        <div className="proposed-letters">
            <ul>{letterList}</ul>
        </div>
    );
}

export default ProposedLetters