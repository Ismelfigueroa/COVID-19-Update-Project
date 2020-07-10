import React from "react";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
  state = {
    firstName: "Ismel",
    lastName: "Figueroa",
    username: "Ismelfigueroa",
    email: "ismelfigueroa7@gmail.com",
    password: "2020",
  };

  handleChange = e => {
 
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  
  };

  render() {
    return (
      <form>
              <h4>Sign up</h4>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.handleChange(e)} 
            />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}><h3>Sign up</h3></button>
      </form>
    );
  }
}