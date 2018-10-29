import React, { Component } from "react";
import { connect } from 'react-redux'
import {addTodoItem} from '../../ducks/reducer'


import "./Form.css";
import plus from "./../../assets/add_red.svg";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleInput(val) {
    this.setState({
      name: val
    })
  }

  render() {
    return (
      <div className="View Form">
        <h1>Add</h1>
        <div className="input_box">
          <input
            value={this.state.name}
            onChange={e => this.handleInput(e.target.value)}
          />
          <img src={plus} alt="add" onClick={() => this.props.addTodoItem(this.state.name)} />
        </div>
      </div>
    );
  }
}



const matchFunctionsToProps ={
  addTodoItem
}

export default connect(null, matchFunctionsToProps)(Form);
