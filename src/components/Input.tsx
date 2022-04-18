import React from 'react';

type MyProps = {
    handleInsertLetter: (letter: string) => void;
};
type MyState = {
    selectedLetter: string;
};

class InputComponent extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {selectedLetter: ""}
    }

    handleChange = (letter: string) => {
        this.setState({selectedLetter: letter.toUpperCase()})
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(this.state.selectedLetter)
        this.props.handleInsertLetter(this.state.selectedLetter)
        this.setState({selectedLetter: ""})
    }

    render() {
        return (
            <div className='input'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Veuillez saisir une lettre" maxLength={1}
                           value={this.state.selectedLetter}
                           onChange={(e) => this.handleChange(e.target.value)}/>
                    <input type="submit" value="Envoyer" disabled={this.state.selectedLetter === ""}/>
                </form>
            </div>
        )
    }
}


export default InputComponent