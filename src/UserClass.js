import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userName: {
        login: "dummy",
        id: "dummy",
        avatar_url: "dummy",
      },
    };
    console.log(this.props.name + "child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ankit-singh-dot");
    const json = await data.json();
    console.log(json);
    this.setState({
      userName: json,
    });
  }
  render() {
    return (
        <div className="user-card">
          <img src={this.state.userName.avatar_url} /> 
        <h2>name:{this.state.userName.login}</h2>
        <h2>id:{this.state.userName.id}</h2>
      </div>
    );
  }
}
export default UserClass;
