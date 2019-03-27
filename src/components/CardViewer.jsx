import React, {Component} from 'react';
import '../App.css';


class CardViewer extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        cardIndex: 0,
        cardFrontSide: true
  
      }
    }
    render() {
      if (this.state.cardFrontSide === true) {
  
        return (
          <div>
            <center>
              <h2>Card Viewer</h2>
            </center>
            <div onClick={this.handleFlip}>
              <div className="card" id="front">
  
                <p className="title">{this.props.cards[this.state.cardIndex].front}</p>
  
                <span class="label label-info end">Click to Flip</span>
  
              </div>
  
            </div>
            <div className='navigation'>
  
              <button
                id='next'
                className='btn btn-primary buttonNext'
                onClick={this.handleNext}>
                Next
              </button>
              <hr/>
              <br/>
              <button className='btn btn-primary buttonNext' onClick={this.props.switchMode}>
                Go to Editor
              </button>
  
            </div>
  
          </div>
  
        )
      } else {
  
        return (
          <div>
            <center>
              <h2>Card Viewer
              </h2>
            </center>
            <div onClick={this.handleFlip}>
  
              <div className="card" id="back">
  
                <p className="title">{this.props.cards[this.state.cardIndex].back}</p>
  
                <span class="label label-info end">Click to Flip</span>
              </div>
  
            </div>
            <div className='navigation'>
              <button className="btn btn-primary buttonNext" onClick={this.handleNext}>
                Next
              </button>
              <hr/>
              <br/>
              <button className="btn btn-primary buttonNext" onClick={this.props.switchMode}>
                Go to Editor
              </button>
            </div>
  
          </div>
  
        )
      }
  
    }
  
    handleFlip = () => {
      console.log("flipped")
      this.setState((state) => ({
        cardFrontSide: !state.cardFrontSide
      }))
  
    }
    handleNext = (event) => {
      console.log(this.props.cards.length, this.state.cardIndex + 1)
      if (this.props.cards.length === this.state.cardIndex + 1) {
  
        this.setState((state) => ({cardIndex: 0, cardFrontSide: true}))
        return
      }
  
      this.setState((state) => ({
  
        cardIndex: state.cardIndex + 1,
        cardFrontSide: true
      }))
    }
  
  }


  export default CardViewer;