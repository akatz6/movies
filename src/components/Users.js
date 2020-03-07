import React, {Component} from 'react';


class Users extends Component {
  render(){
    return (
        <div>
          <p>Welcome {this.props.users.toString()}!</p>
        </div>
    )
  }
}

export default Users;
