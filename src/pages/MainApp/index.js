import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../../components'
import './main-app.scss'
// Import pages
import CreateBlog from "./../CreateBlog"
import DetailBlog from "./../DetailBlog"
import Home from "./../Home"


const MainApp = () => {
    return (
        <div className="main-app">
            <Header/>
            <div className="main-app__content">
                <Router >
                    <Switch>
                        <Route path="/create-blog">
                            <CreateBlog />
                        </Route>
                        {/* router with send url params  */}
                        <Route path="/detail-blog/:id" render={
                            (props) => (
                                <DetailBlog 
                                    blogId={props.match.params.id}
                                />
                            )
                        } />
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>  
            <Footer />
        </div>
    )
}

export default MainApp
