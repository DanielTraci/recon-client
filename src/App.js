import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css"
import ContactForm from "./components/ContactPage";
import Download from "./components/Download";
import Features from "./components/Features";
import HomePage from "./components/HomePage";
import MenuAppBar from './components/MenuAppBar'
import NotFound from "./components/NotFound";
import Team from "./components/Team";
import Tutorials from "./components/Tutorials";
import Footer from './components/Footer';
import axios from "axios";


function App(props) {

    //Save all received messages
  const [messages, updateMessages] = useState([])
    
  //handle the messages
  //it will update the state and the DB
  const handleSend = (event) => {
    event.preventDefault()
    let newMessage = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    }
    axios.post(`http://localhost:5005/api/contact`, newMessage)
    .then((result) => {
      // updates the data in the state
      updateMessages([result.data , ...messages])
    }) //the form doest get wipped off

    /* , //redirects the user to homepage, has to be decided if we display a success message or redirect
    props.history.push('/'), [messages]) */

    .catch((err) => {
      console.log('Seding failed')
    });
  }

  return (
    <div className="appPadding">
        <MenuAppBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/download" component={Download}/>
          <Route path="/tutorials" component={Tutorials}/>
          <Route path="/team" component={Team}/>
          <Route path="/contact" render={(routeProps) => {
            return <ContactForm onSend={handleSend} {...routeProps}/>}}/>
          <Route path="/features" component={Features}/>
          <Route component={NotFound} />
        </Switch>
        <Footer/>
        
    </div>
  );
}

export default withRouter(App)
