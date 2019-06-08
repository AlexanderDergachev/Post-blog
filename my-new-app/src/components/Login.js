import React from 'react';
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }
  render() {
    return (
      <div className="login-main">
        <h1  className="head-create-post-page">Сначала авторизуйтесь</h1>
        <form className="login-form" onSubmit={this.onSubmit}>
          <input type="email" name="email" placeholder="Введите email" value={this.state.email} onChange={this.handleInputChange} required/>
          <input type="password" name="password" placeholder="Введите пароль" value={this.state.password} onChange={this.handleInputChange} required />
          <input className="login-submit-button" type="submit" value="Отправить"/>
        </form>
      </div>
    );
  }
}