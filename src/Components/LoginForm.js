import React, { Component } from 'react'
import SubmitButton from './SubmitButton.js'
import UserStore from '../Stores/UserStore.js'

export class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  resetForm() {
    this.setState({
      username: '',
      password: '',
    })
  }

  async doLogin() {
    if (!this.state.username || !this.state.password) {
      return;
    }

    try {

      let res = await fetch('/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = true;
      }
      else if (result && result.success === false) {
        this.resetForm();
        alert(result.msg);
      }

    }

    catch(e) {
      console.log(e);
      this.resetForm();
    }

  }

  render() {
    return (
      <form className='LoginForm'>

        <input 
        type='text' 
        placeholder='Username'
        value={this.state.username}
        name='username' 
        className='InputField'
        autoComplete='off'
        onChange={this.onChange}
        />

        <input type='password' 
        placeholder='Password' 
        value={this.state.password}
        name='password' 
        className='InputField' 
        onChange={this.onChange}
        />

        <SubmitButton 
        text='SIGN IN'
        disabled={this.state.username < 1 || this.state.password < 1}
        className='SignInButton'
        onClick={ () => this.doLogin() }
        />
        
      </form>
    )
  }
  
}

export default LoginForm
