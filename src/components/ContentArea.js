import React from 'react';
import UserManager from './UserManager';
import MessageArea from './MessageArea';
import AlbumMaker from './AlbumMaker';
import ContentAreaContext from './ContentAreaContext';
import LayeredDiv from './LayeredDiv';

class ContentArea extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userId   : "",
      userName : "",
      loggedIn : false
   };

   this.handleLogInChange = this.handleLogInChange.bind(this);

  }

  render() {

    return (

        <ContentAreaContext.Provider value={ { userId: this.state.userId, userName: this.state.userName }} >

        <div>
          <UserManager logInCallback={ this.handleLogInChange }
           showMessageArea={ userInfo => ( <MessageArea userInfo={userInfo} /> ) } />

          <AlbumMaker />
          <LayeredDiv />
        </div>

        </ContentAreaContext.Provider>
    );

  }

  handleLogInChange(logInResult) {

    this.setState ( {
      userId   : logInResult.userId,
      userName : logInResult.userName,
      loggedIn : logInResult.loggedIn
    }, () => { console.log(this.state); });

  }
}

export default ContentArea;
