import React, {Component} from 'react';
import '../App.css';

class CardEditor extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        front: "",
        back: ""
      }
    }
    render() {
  
      const rows = this.props.cards
        .map((card, i) => {
          return (
            <tr key={i}>
              <td>
                {card.front}
              </td>
              <td>
                {card.back}
              </td>
              <td>
                <button className='btn btn-danger' data-index={i} onClick={this.deleteCard}>
                  Delete
                </button>
              </td>
  
            </tr>
          )
        })
      return (
        <div className='container'>
          <center>
            <h2>
              Card Editor
            </h2>
          </center>
  
          <table className='table table-responsive table-hover'>
            <thead>
              <tr>
                <th>
                  Front
                </th>
                <th>
                  Back
                </th>
                <th>
                  Delete
                </th>
              </tr>
  
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
          <hr/>
          <br/>
          <div className='row'>
            <div className='col-md-3'>
              <div className="form-group ">
  
                <input
                  onChange={this.handleChange}
                  name='front'
                  placeholder="front of card"
                  type="text"
                  className="form-control"
                  id="front"
                  value={this.state.front}/>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="form-group ">
  
                <input
                  onChange={this.handleChange}
                  name='back'
                  placeholder="front of back"
                  type="text"
                  className="form-control"
                  id="back"
                  value={this.state.back}/>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='form-group'>
                <button className='btn btn-primary' onClick={this.addCard}>
                  Add card</button>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <center>
            <button className='btn btn-primary' onClick={this.props.switchMode}>
              Go to Viewer
            </button>
          </center>
  
        </div>
      )
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
      console.log(this.state)
    }
  
    addCard = () => {
      this
        .props
        .addCard(this.state.front, this.state.back)
      this.setState({front: '', back: ''})
    }
  
    deleteCard = (event) => {
      const index = event.target.dataset.index
      this
        .props
        .deleteCard(index)
    }
  
  }

  export default CardEditor