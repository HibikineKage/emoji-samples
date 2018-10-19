import * as React from 'react';
import emoji from 'react-easy-emoji';
import ReactEmoji from 'react-emoji';
import Twemoji from 'react-twemoji';
import './App.css';

interface IState {
  text: string;
}
class App extends React.Component<{}, IState> {
  public state = {
    text: `🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️Hello🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️
  🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️Hello🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️🧝🏿‍♂️`,
  };
  public render() {
    const { text } = this.state;
    return (
      <div className="App">
        <h1>React Emoji Libraries</h1>
        <h2>Pure Textarea</h2>
        <textarea onChange={this.handler} value={text}/>
        <h2>Pure Text</h2>
        <p>{text}</p>
        <h2>
          <a href="https://github.com/ZxMYS/react-twemoji">react-twemoji</a>
        </h2>
        <Twemoji options={{ className: 'twemoji' }}>{text}</Twemoji>
        <Twemoji>
          <textarea value={text} onChange={this.handler}/>
        </Twemoji>
        <h2>
          <a href="https://github.com/appfigures/react-easy-emoji">
            react-easy-emoji
          </a>
        </h2>
        <div contentEditable={true} onChange={this.divHandler}>{emoji(text)}</div>
        <p>{emoji(text)}</p>
        <h2>
          <a href="https://github.com/banyan/react-emoji">react-emoji</a>
        </h2>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    );
  }
  private handler = (e: React.FormEvent<HTMLTextAreaElement>) =>
    this.setState({ text: e.currentTarget.value });
    private divHandler = (e: React.FormEvent<HTMLDivElement>) => this.setState({text: e.currentTarget.innerText})
}

export default App;
