import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import News from './components/news'
import './App.css';

class App extends React.Component {
  render () {
    return (
    <div className="App">
      <Header />
      <div className="container">
        <News />
      </div>
      <Footer />
    </div>
    )
  }
}

export default App;
