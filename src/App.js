//All website components(pages) are here in the return statement, where we created the routes//

import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css"
import config from './config';
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
import Blog from "./components/Blog"
import BlogArticleTemplate from "./components/BlogArticleTemplate"
import data from './BlogList';

function App(props) {
  //the state of the data
  const [messages, updateMessages] = useState([])
  const [error, updateError] = useState(null)
  const [allFeatures, updateFeatures] = useState(dataAllFeatures)
  const [fileteredFeatures, updateFilteredFeatures] = useState(dataAllFeatures)
  const [customFeatures, updateCustomFeatures] = useState(dataCustomFeatures)
  const [content, updatedContent] = useState(data)
  const [filteredContent, updatedFilteredContent] = useState(data)

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

  // handle Search of articles at /blog
  const handleSearchBlog = (event) => {
    // gives us the user's input
    let userinput = event.target.value
    // check if the input includes the name of the feature
    let filteredContent = content.filter((article) => {
      return article.title.toLowerCase().includes(userinput.toLowerCase())
    })
    //updatea the data in the state
    updatedFilteredContent(filteredContent)
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
    console.log(newMessage)
    // wipe off the contact form after submit
    event.target.name.value = ''
    event.target.email.value = ''
    event.target.subject.value = ''
    event.target.message.value = ''
    axios.post(`${config.API_URL}/api/contact`, newMessage)
      .then((result) => {
        // updates the data in the state
        updateMessages([result.data, ...messages])
        updateError(null)
      })
      /* , //redirects the user to homepage or any other page
      props.history.push('/'), [messages]) */
      .catch((errorObj) => {
        updateError(errorObj.response.data)
      });
  }

  return (
    <div className="appMargins">
      <MenuAppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/download" component={Download} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/features" render={(routeProps) => {
          return <Features allFeatures={fileteredFeatures} customFeatures={customFeatures} onSearch={handleSearch} {...routeProps} />
          //passing the data (all features and custom features) and the Search function to Features Component
        }} />
        <Route path="/team" component={Team} />
        <Route path="/contact" render={(routeProps) => {
          return <ContactPage error={error} onSend={handleSend} {...routeProps} />
          //passing the Send function to ContactPage component so that the users can send messages
        }} />

        <Route exact path="/blog" render={(routeProps) => {
          return <Blog content={filteredContent} onSearchBlog={handleSearchBlog}  {...routeProps} />
        }} />
        {/* allArticles={allArticles}  */}
        <Route path="/blog/:title" render={(routeProps) => {
          return <BlogArticleTemplate content={content}   {...routeProps} />
        }} />

        <Route component={NotFound} />
      </Switch>
      <Footer />

    </div>
  );
}

export default withRouter(App)
