import React, { Component } from 'react';
import Validation from './Val/Val';
import Char from './Char/Char';
import './App.css';

class App extends Component {
	state = {
		letter: ''
	};

	inputChangedHandler = (event) => {
		this.setState({
			letter: event.target.value
		});
	};

	deleteCharHandler = (index) => {
		const text = this.state.letter.split('');
		text.splice(index, 1);
		const updatedvalue = text.join('');
		this.setState({ letter: updatedvalue });
	};

	render() {
		let charlist = this.state.letter.toUpperCase().split('').map((alphabet, index) => {
			return <Char character={alphabet} click={() => this.deleteCharHandler(index)} />;
		});

		return (
			<div className="App">
				<h1>Let's learn the Alphabet by Spelling a word!</h1>
				<p>Enter a Word</p>
				<input
					className="input"
					type="text"
					onChange={(event) => this.inputChangedHandler(event)}
					value={this.state.letter}
				/>
				<p>{this.state.letter}</p>
				<Validation letter={this.state.letter} />
				<p>The characters are {charlist} </p>
				<p>The word starts with {charlist[0]}</p>
				<p>The word ends with {charlist[charlist.length - 1]}</p>
			</div>
		);
	}
}

export default App;
