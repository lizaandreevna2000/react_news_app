import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import News from './components/news'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './components/article'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Router>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={News} />
                    <Route exact path="/news/:id" component={Article} /> 
                </Switch>
            </div>
            <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
