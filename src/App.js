import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Footer from './footer'

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route exact path='/' component={() => { return <Home /> }} />
        <Route exact path='/service' component={() => { return <Service /> }} />
        <Route exact path='/about' component={() => { return <About /> }} />
        <Route exact path='/contact' component={() => { return <Contact /> }} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
