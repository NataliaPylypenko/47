import React, { Component } from 'react';

class Form extends Component<{}, {}> {

  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted!');
  }

  handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
    console.log('Coppied!');
  }

  render() {
    return (
        <form
            onSubmit={this.handleSubmit}
        >
          <label>
            Simple text:
            <input
                onFocus={this.handleFocus}
                onCopy={this.handleCopy}
                type="text"
                name="text"
            />
            <button
                type="submit"
            >Submit</button>
          </label>
        </form>
    );
  }
}

const App:React.FC = () => <Form />;

export default App;