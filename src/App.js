import React, { Component } from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Realtors from "./components/Realtors/Realtors";
import Features from "./components/Features/Features";
import Pictures from "./components/Story/Pictures/Pictures";
import Content from "./components/Story/Content/Content";
import Homes from "./components/Homes/Homes";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar/>
        <Header/>
        <Realtors/>
        <Features/>
        <Pictures/>
        <Content/>
        <Homes/>
        <Gallery/>
        <Footer/>
      </div>
    );
  }
}

export default App;
