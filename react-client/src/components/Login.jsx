import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);  
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            password:''
                     }
    }

    onChangeUsername(e) {
            
        this.setState({
         username : e.target.value 

        })
      }
      onChangePassword(e) {
        
        this.setState({
        password : e.target.value
        })
      }

      onSubmit(e) {
        e.preventDefault();
    //where we set the state and send it in the post request
        const user = {
          username: this.state.username,
          password: this.state.password
        }
        axios.post("http://localhost:3000/addUser/login", user)
            .then(res => console.log(res.data));
            console.log(user);
            console.log('user loged in')
    }
    render(){
        return (
               
               
                <form onSubmit={this.onSubmit}>
                <label > User Name </label>
                <br></br>
                <br></br>
                <input required type='text'className="form-control"value= {this.setState.username}onChange={this.onChangeUsername} placeholder='User Name'/>                   
                <br></br>
                <br></br>
                <label > Creat Password </label>
                <br></br>
                <br></br>
                <input required  type="password" name="password" className="form-control"value= {this.setState.password} onChange={this.onChangePassword} placeholder='Creat Password' />
                <br></br>
                <br></br>
                <input type='submit' value='Log In'/>
                <br></br>
                <br></br>
                <a href='/signup'>go to signup</a>
                </form>
             
            )  
    }
}

