import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../../components'
// Import pages
import CreateBlog from "./../CreateBlog"
import DetailBlog from "./../DetailBlog"
import Home from "./../Home"


const MainApp = () => {
    return (
        <div className="main-app">
            <Header/>
            <Router>
                <Switch>
                    <Route path="/create-blog">
                        <CreateBlog />
                    </Route>
                    <Route path="/detail-blog">
                        <DetailBlog />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default MainApp
