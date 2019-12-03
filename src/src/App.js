import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import News from './components/news'
import { Provider } from 'react-redux';
import store from './store'
import './App.css';

class App extends React.Component {
  render () {
    return (
    <Provider store = {store}>
      <div className="App">
        <Header />
        <div className="container">
          <News />
        </div>
        <Footer />
      </div>
    </Provider>
    )
  }
}

export default App;
