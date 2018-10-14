import React, {Component} from 'react';


class Signin extends Component{
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
  }

  handleSubmit(event){
    console.log(this.state)
    const config = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer token',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(this.state),
    }
    fetch('/signin',config)
      .then( res => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch( error => {
        console.log(error)
      })
    event.preventDefault()
  }

  onChangeEmail(event){
    this.setState({
      email:  event.target.value
    })
  }

  onChangePassword(event){
    this.setState({
      password:  event.target.value
    })
  }
  
  render(){
    return(
      <div className="div">
        <form onSubmit={this.handleSubmit} method='post'>
          <label htmlFor="correo">Correo</label>
          <input type="email" id="correo" value={this.state.email} onChange={this.onChangeEmail}/>
          <br/>
          <label htmlFor="password">Contraseña</label>
          <input type="password"  id="password"  value={this.state.password} onChange={this.onChangePassword}/>
          <input type="submit" value="entrar"/>
        </form>
      </div>
    )
  }
}

export default Signin