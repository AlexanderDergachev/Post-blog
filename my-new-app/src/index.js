import React from 'react';
import ReactDOM from 'react-dom';
import Index_page  from './components/Index_page/Index_page';
import Contacts_page from './components/Contacts_page/Contacts_page';
import Admin_page from './components/Admin_page/Admin_page';
import Create_post_page from './components/Create_post_page/Create_post_page'
import Posts_page from './components/Posts_page/Posts_page'
import Single_post_page from './components/Single_post_page/Single_post_page'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import withAuth from './components/withAuth';
import Edit_post_page from './components/Edit_post_page'
import Register_page from './components/Register_page'

// import * as serviceWorker from './serviceWorker'; //подклчючение этой хрени тоже не трогай

ReactDOM.render(
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Index_page}/>
            <Route exact path="/contacts" component={Contacts_page}/>
            <Route exact path='/admin' component={withAuth(Admin_page)}/>
            <Route exact path='/create-post' component={Create_post_page}/>
            <Route exact path='/posts' component={Posts_page}/>
            <Route exact path="/post/:id" component={Single_post_page}/>
            <Route path="/login" component={Login} />
            <Route exact path="/post/edit/:id" component={withAuth(Edit_post_page)}/>
            <Route exact path="/register" component={Register_page}/>
        </Switch>
        <Footer/>
    </Router>,
    document.getElementById('root')
);


// serviceWorker.unregister(); // эту хрень не трогай пока что
