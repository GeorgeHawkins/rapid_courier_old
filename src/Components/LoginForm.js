import React, { Component } from 'react'

export class LoginForm extends Component {

  state = {
    user: '',
    pass: '',
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <form className='LoginForm'>

        <input 
        type='text' 
        placeholder='Username'
        value={this.state.user}
        name='user' 
        className='InputField'
        autoComplete='off'
        onChange={this.onChange}/>

        <input type='password' 
        placeholder='Password' 
        value={this.state.pass}
        name='pass' 
        className='InputField' 
        onChange={this.onChange}/>

        <button 
        type='submit' 
        disabled={(this.state.user.length < 1 || this.state.pass.length < 1)} 
        className='SignInButton'>SIGN IN</button>
        
      </form>
    )
  }
  
}

export default LoginForm
