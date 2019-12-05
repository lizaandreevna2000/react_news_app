import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Article from './components/article'

export const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/news" component={App} />
                <Route exact path="/news:id" component={Article} />
            </Switch>
        </div>
    </Router>
)