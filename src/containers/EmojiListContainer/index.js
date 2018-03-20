import React from 'react';
import { EmojiList } from '../../components/EmojiList';

export class EmoijListContainer extends React.Component {
  state = { names: [], loading: false, initial: true };

  async componentDidMount() {
    this.setState({ initial: false, loading: true });
    const res = await fetch('http://localhost:3001/emoji');
    const names = await res.json();
    this.setState({ names, loading: false });
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return <EmojiList names={this.state.names} />;
  }
}
