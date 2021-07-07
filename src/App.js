import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css"
import ContactPage from "./components/ContactPage";
import Download from "./components/Download";
import Features from "./components/Features";
import HomePage from "./components/HomePage";
import MenuAppBar from './components/MenuAppBar'
import NotFound from "./components/NotFound";
import Team from "./components/Team";
import Tutorials from "./components/Tutorials";
import Footer from './components/Footer';
import axios from "axios";
import dataAllFeatures from "./AllFeatures.json"
import dataCustomFeatures from "./CustomFeatures.json"




function App(props) {
  //the state of the data
  const [messages, updateMessages] = useState([])
  const [error, updateError] = useState(null)
  const [allFeatures, updateFeatures] = useState(dataAllFeatures)
  const [fileteredFeatures, updateFilteredFeatures] = useState(dataAllFeatures)
  const [customFeatures, updateCustomFeatures] = useState(dataCustomFeatures)

  // handle Search of tools at /features
  const handleSearch = (event) => {
    // gives us the user's input
    let input = event.target.value
    // check if the input includes the name of the feature
    let fileteredFeatures = allFeatures.filter((feature) => {
      return feature.name.toLowerCase().includes(input.toLowerCase())
    })
    //updatea the data in the state
    updateFilteredFeatures(fileteredFeatures)
  }


  // handle the input from the contact form /contact
  const handleSend = (event) => {
    event.preventDefault()
    
    //creates a new message based on the model we provided in the Message Model on the server side
    let newMessage = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    }

    // wipe off the contact form after submit
    event.target.name.value = ''
    event.target.email.value = ''
    event.target.subject.value = ''
    event.target.message.value = ''
    axios.post(`http://localhost:5005/api/contact`, newMessage)
      .then((result) => {
        // updates the data in the state
        updateMessages([result.data, ...messages])
        updateError(null)
      })
      /* , //redirects the user to homepage or any other page
      props.history.push('/'), [messages]) */
      .catch((errorObj) => {
        console.log(errorObj.response.data)
        updateError(errorObj.response.data)
      });
  }

  return (
    <div className="appPadding">
      <MenuAppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/download" component={Download} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/features" render={(routeProps) => {
          return <Features allFeatures={fileteredFeatures} customFeatures={customFeatures} onSearch={handleSearch} {...routeProps} />
        }} />
        <Route path="/team" component={Team} />
        <Route path="/contact" render={(routeProps) => {
          return <ContactPage error={error} onSend={handleSend} {...routeProps} />
        }} />
        <Route component={NotFound} />
      </Switch>
      <Footer />

    </div>
  );
}

export default withRouter(App)
