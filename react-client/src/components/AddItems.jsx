import React from 'react';
import ListItem from './ListItem.jsx';


// form for add item
class AddItems extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      itemName : "",
      category : "",
      description : "",
      image : ""
    }
  }


  onChange(event){
    //console.log(this.state.name,this.state.category,this.state.description)
    this.setState({
    [event.target.name] : event.target.value
    });
    console.log (this.state.itemName , this.state.category , this.state.description)
  }

  submit(){
    this.props.onSubmit(this.state.name)
    console.log(this.props)
  }

  render(){
  return (
    <div>
  <form>
    <input
        id="itemName"
        name="itemName"
        type="text"
        placeholder="Insert Item Name"
        onChange={this.onChange.bind(this)}
        value={this.state.name}>
     </input>
     <br></br>
    <input
        id="category"
        name="category"
        placeholder="Insert Item Category"
        type="text"
        onChange={this.onChange.bind(this)}
        value={this.state.category}>
     </input>
     <br></br>
    <input
        id="description"
        name="description"
        type="text"
        placeholder="Insert Item Description"
        onChange={this.onChange.bind(this)}
        value={this.state.description}>
      </input>
      <br></br>
    {/* <image id="image" onChange={this.onChange.bind(this)} value={this.state.image}>Image</image> */}
    <button
      id="addItem"
      type="submit"
      value="Submit"
      onClick = {this.submit.bind(this)}>
      ADD ITEM
    </button>
  </form>
    {/* <h4> List Component </h4>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem item={item}/>)} */}
  </div>
  )
}


}
export default AddItems;