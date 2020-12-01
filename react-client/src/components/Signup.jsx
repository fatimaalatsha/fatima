import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);
            
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password:'',
            phone:'',
            address:''
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
          onChangePhone(e) {
            
            this.setState({
                phone : e.target.value
            })
          }
          onChangeAddress(e) {
            
            this.setState({
                address : e.target.value
            })
          }
          onSubmit(e) {
            e.preventDefault();
        
            const user = {
              username: this.state.username,
              password: this.state.password,
              phone: this.state.phone,
              address: this.state.address
            }
        
            console.log(user);
        }
    render(){
        return (
            <div>
                <h1>
                Sign up now!
                </h1>
                <form onSubmit={this.onSubmit}>
                <label > User Name </label>
                
                <input required type='text'
                 className="form-control"
                  value= {this.setState.username}
                  onChange={this.onChangeUsername} 
                  placeholder='User Name'/>
            
                <label > Creat Password </label>
                <input  type="password" name="password" className="form-control"value= {this.setState.password} onChange={this.onChangePassword} />
                <label > Phone Number </label>
                <input className="form-control"  value= {this.setState.phone} onChange={this.onChangePhone} placeholder='Phone Number' />
                <label > Address </label>
                <input type='text' className="form-control" value= {this.setState.address} onChange={this.onChangeAddress} placeholder='Address' />
                <input type='submit' value='Creat Account'/>
            </form>
            </div>
        )
    }
}


