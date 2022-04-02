import React from 'react';

class MessageArea extends React.Component {

  render() {

    // return <div>MessageArea</div>;

    let userInfo = this.props.userInfo;

    return (
      <p>
        { userInfo.loggedIn ? "Welcome " + userInfo.userName + "! " : "" }
        {userInfo.instructions}
      </p>
    );

  }
}

export default MessageArea;
