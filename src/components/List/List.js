import React from "react";
import {connect} from 'react-redux'
import {removeItem} from "../../ducks/reducer"

import trash from "./../../assets/waste_bin_red.svg";
import "./List.css";

function List(props) {
  let tempList = [];
  let list = props.todoItems.map((item, i) => {
    return (
      <div className="list_item" key={item}>
        <img src={trash} alt="delete" onClick={_ => props.removeItem(i)} />
        <p>{item}</p>
      </div>
    );
  });
  return (
    <div className="View List">
      <h1>List</h1>
      <div className="list_box">
      {list}
      </div>
    </div>
  );
}

function mapStoreToProps(store){
  return {
    todoItems: store.todoItems
  }
}

const mapFunctionsToProps = {
  removeItem
}

export default connect(mapStoreToProps, mapFunctionsToProps)(List);
