import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import News from './components/news';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './components/article';
import updateArticle from './components/editArticle'
import postArticle from './components/postArticle'
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
                    <Route exact path="/news/create" component={postArticle} />
                    <Route exact path="/news/:id" component={Article} /> 
                    <Route exact path="/news/:id/edit" component={updateArticle} /> 
                </Switch>
            </div>
            <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
