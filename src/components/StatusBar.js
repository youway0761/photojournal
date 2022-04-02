import React from 'react';
import AppContext from './AppContext';

class StatusBar extends React.Component {

  static contextType = AppContext;

  componentDidMount() {
    console.log("StatusBar.componentDidMount( )");

    // let the property in App point to this
    let appContext = this.context;
    appContext.statusBar = this;
  }

  constructor(props) {
    super(props);

    this.state = { userId: "" };

    this.handleUserIdChange = this.handleUserIdChange.bind(this);

    this.state = {
      userId: "",
      numMessages: 0,
      numFriends: 0,
      numFavourites: 0
    }
  }

  handleUserIdChange(newId) {
    console.log("StatusBar.handleUserIdChange(" + newId + ")");
    this.setState( { userId: newId } );

    // simulated fetch, in real life this would have been retrieved
    // from data sources instead of hardcoded!!

    if (newId === "harry") {
      this.setState({ numMessages: 3, numFriends: 4, numFavourites: 5 });
    }

    if (newId === "jenny") {
      this.setState({ numMessages: 8, numFriends: 10, numFavourites: 3 });
    }
  }

  render() {

    return (

        <div className="statusBar">
          <p>
            {this.state.userId !== "" &&
            <span>
              {this.state.userId}&nbsp;
              <img src="../images/email-icon.png" alt="messages" />{this.state.numMessages}
              <img src="../images/friends-icon.png" alt="friends" />{this.state.numFriends}
              <img src="../images/favourites-icon.png" alt="favourites" />{this.state.numFavourites}
            </span>
            }
          </p>
        </div>
    );

  }

}

export default StatusBar;
