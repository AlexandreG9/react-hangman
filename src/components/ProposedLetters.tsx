import React from 'react';

type MyProps = {
    proposedLetters: Array<string>,
    mysteryWord: string
};

const ProposedLetters = (props: MyProps) => {
    const letterList = Array.from(props.proposedLetters)
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