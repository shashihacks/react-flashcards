import React, {Component} from 'react';
import './App.css';

import CardEditor from './components/CardEditor';
import CardViewer from './components/CardViewer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      editor: true,
      cards: [
        {
          front: '1 + 5',
          back: ' 6 '
        }, {
          front: '2 -9',
          back: '-7'
        }
      ]
    };
  }

  render() {
    if (this.state.editor) {
      return <CardEditor
        deleteCard={this.deleteCard}
        addCard={this.addCard}
        cards={this.state.cards}
        switchMode={this.switchMode}/>
    } else {
      return <CardViewer cards={this.state.cards} switchMode={this.switchMode}/>
    }
  }

  switchMode = () => {
    this.setState(state => ({
      editor: !state.editor
    }))
  }

  addCard = (front, back) => {
    console.log(front, back)
    this.setState((state) => ({
      cards: [
        ...state.cards, {
          front,
          back
        }
      ]
    }))

  }

  deleteCard = (index) => {
    this.setState(state => {
      const cards = [...state.cards]
      cards.splice(index, 1)
      return {cards: cards}
    })
  }
}

export default App;
