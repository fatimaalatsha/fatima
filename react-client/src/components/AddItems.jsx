import React, { Component } from 'react';
import axios from "axios";


export default class AddItems extends Component {
  constructor(props) {
    super(props);

    //Defining the "this" in the functions using .bind method
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      itemName: "",
      category : "",
      categoryList: [],
      description: ""
    }
  }

  //List of category
  //Fix the list
  componentDidMount() {
    this.setState({
      categoryList: ["Women", "Men", "Kids"],
      category: "Women"
    });
  }

  //Event Handlers:
  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      selectValue : e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const item = {
      itemName: this.state.itemName,
      category: this.state.category,
      description: this.state.description
    }

    console.log(item);
    axios.post("http://localhost:3000/addItems/add", item)
      .then(res => console.log(res.data));

    // window.location = '/clothes'
  }

  render() {
    return (
      <div>
        <h3> Insert Quote Here </h3>
        <br />
        <form onSubmit = {this.onSubmit}>
          <div className = "addItemName">

            <label>Item Name </label>
            <input 
              type = "text" 
              className = "itemName" 
              value = {this.state.itemName} 
              onChange = {this.onChangeItemName}/>

          </div>
          <br />
          <div className = "addCategory">

            <label>Select Category </label>
            <select
              ref = "userInput"
              required
              className = "category"
              value = {this.state.selectValue}
              onChange = {this.onChangeCategory}
              >
              <option value = "women">Women</option>
              <option value = "men">Men</option>
              <option value = "kids">Kids</option>

            </select>

          </div> 
          <br />
          <div className = "addDescription">

            <label>Description </label>
            <input 
              type = "text" 
              className = "description" 
              value = {this.state.description} 
              onChange = {this.onChangeDescription}/>

          </div>
          <br />
          <div className = "submitButton">
            <input type = "submit" value = "Submit" className = "button" />
          </div>

        </form>
      </div>
    )
  }
}
