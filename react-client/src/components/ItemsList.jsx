import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AddItems from './AddItems.jsx';
import axios from "axios";


const ClothesItem = props => (
    <tr>
        <td>{props.item.itemName}</td>
        <td>{props.item.category}</td>
        <td>{props.item.description}</td>
        <td>
            <a href = '#' onClick = {() => {props.deleteItem(props.item._id)}}>Delete</a>  
        </td>
    </tr>
)

export default class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
         axios.get("http://localhost:3000/addItems/")   
            .then( res => {
                this.setState({items: res.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteItem(id) {
        axios.delete("http://localhost:3000/addItems/" + id)
            .then(res => console.log(res.data));
        this.setState({
            items: this.state.items.filter(el => el._id !== id)
        })
    }

    itemsList() {
        return this.state.items.map(currentItem => {
            return <ClothesItem item = { currentItem } deleteItem = { this.deleteItem } key = { currentItem._id }/>; 
        })
    }

    render() {
        return (
            <div>
                <h2>Clothing</h2>
                <table className = "table">
                <thead className = "thead">
                    <tr>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.itemsList()}
                </tbody>
                </table>
            </div>
        )
    }
}