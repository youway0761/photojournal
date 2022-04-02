import React from 'react';
import AppContext from './AppContext';
import './master.css';

class UserManager extends React.Component {

  static contextType = AppContext;

// Task 6
  componentDidMount() {
    console.log("UserManager.componentDidMount( )");

    // let the property in App point to this
    // Task 7
    let appContext = this.context;
    appContext.userManager = this;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("UserManager.componentDidUpdate( )");

    // only do this if the ID has changed

    // Task 7
    if (prevState.userId !== this.state.userId) {

      // calls ALL the event listeners and pass them the new user ID
      this.idChangeListeners.forEach(listener => listener(this.state.userId));
    }
  }

  constructor(props) {
    super(props);

    // a list of objects that listen to ID change events
    this.idChangeListeners = [];

    // Task 2
    this.state = {
      userid: "",
      userName: "",
      loggedIn: false,
      instructions: "Please log in to comment on photos.",
      userIdFieldValue: "",
      passwordFieldValue: ""
    }

    // these are necessary for "this" to point to this object
    this.handleUserIdChange = this.handleUserIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.idChangeSubscribe = this.idChangeSubscribe.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // Task 3
  handleUserIdChange(event) {
    this.setState({ userIdFieldValue: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ passwordFieldValue: event.target.value });
  }

  // this method is for listener to add themselves to the list so that
  // they will get notified when the user ID has changed

  // Task 7
  idChangeSubscribe(listener) {
    console.log("UserManager.idChangeSubscribe()");
    this.idChangeListeners.push(listener);
    console.log(this.idChangeListeners);
  }

  logIn() {

    // Task 2
    // this.setState ({ loggedIn: true });

    // Task 3
    let userIdEntered = this.state.userIdFieldValue;
    let passwordEntered = this.state.passwordFieldValue;

    let successful = false;
    let userName = "unknown";

    // Simulated database lookup!!! We would not do this in real life!

    if (userIdEntered.trim() === "harry" && passwordEntered.trim() === "12345") {
      userName = "Harry Kong";
      successful = true;
    }

    if (userIdEntered.trim() === "jenny" && passwordEntered.trim() === "12345") {
      userName = "Jenny Luz";
      successful = true;
    }

    // Was the log in successful?

    if (successful) {
      this.setState( { loggedIn: true, userId: userIdEntered.trim(), userName: userName, instructions: "You can now comment on photos!" },
                      () => { this.props.logInCallback(this.state); } );
    }
    else {
      this.setState( { instructions: "Incorrect user ID or password. Try again." } );
    }

  }

  logOut() {

    // Task 2
    //this.setState({loggedIn: false});

    // Task 3
    this.setState( { instructions: "Please log in to comment on photos." } )
    this.setState( { loggedIn: false, userId: "", userName: "", userIdFieldValue: "", passwordFieldValue: "" }, () => { this.props.logInCallback(this.state); } );
  }

  render() {
    // Task 2
    if (this.state.loggedIn) {
        // logged in
        return (
          <div className="user-manager-block user-manager-block-active-background">
            <p>Logged in as: { this.state.userName }&nbsp;<input className="button" type="button" value="Log Out" onClick={this.logOut} /></p>
            { this.props.showMessageArea(this.state) }
          </div>
        );
    }
    else {
        // logged Out
        return (
          <div className="user-manager-block user-manager-block-inactive-background">
            <p>user ID:&nbsp;<input type="text" value={this.state.userIdFieldValue} onChange={this.handleUserIdChange}/>&nbsp;
            password:&nbsp;<input type="text" value={this.state.passwordFieldValue} onChange={this.handlePasswordChange}/>&nbsp;
            <input className="button" type="button" value="Log In" onClick={this.logIn} /></p>
            { this.props.showMessageArea(this.state) }
          </div>
        );
    }
  }

}

export default UserManager;
