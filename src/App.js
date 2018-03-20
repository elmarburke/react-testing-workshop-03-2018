import React from 'react';
import { EmoijListContainer } from './containers/EmojiListContainer'
import { Logo } from './components/Logo'
import { Header } from './components/Header'
import { Toggle } from './components/Toggle'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Logo />
        </Header>
        <section>
          <EmoijListContainer />
        </section>
        <section>
          <Toggle />
        </section>
      </div>
    );
  }
}

export default App;
