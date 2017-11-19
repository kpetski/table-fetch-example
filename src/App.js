import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FinalTable from './components/FinalTable'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Example Table" />
        <FinalTable />
        <br/>
        <div className="footer navbar-fixed-bottom">
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
