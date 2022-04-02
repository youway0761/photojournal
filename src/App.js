import React from 'react';
import BannerImage from './components/BannerImage';
import StatusBar from './components/StatusBar';
import ContentArea from './components/ContentArea';
import AppContext from './components/AppContext';

import './App.css';

class App extends React.Component {

// Task 6
  componentDidMount() {
    console.log("App.componentDidMount( )");

    // at this point, both the StatusBar and the UserManagher have rendered
    // let's connect them!

    // Task 7
    this.userManager.idChangeSubscribe(this.statusBar.handleUserIdChange);
  }

  constructor(props) {
    super(props)

    console.log("App.constructor( )");

    // Task 7
    this.statusBar = null;
    this.userManager = null;
  }

  render() {
      return (

        <AppContext.Provider value={this}>

          <div className="App">
            <BannerImage />
            <div>
              <h1>Welcome to My Photo Journal (Finished)</h1>
            </div>
            <StatusBar />
            <ContentArea />
          </div>

          </AppContext.Provider>

      );
    }

  }

export default App;
