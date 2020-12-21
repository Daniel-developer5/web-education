import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom' // you should install @types/react-router-dom
import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodoPage'
import { AboutPage } from './pages/AboutPage'

import './App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
     <Navbar />
     <div className="container">
       <Switch>
         <Route component={TodosPage} path="/" exact />
         <Route component={AboutPage} path="/about" />
       </Switch>
     </div>
    </BrowserRouter>
  )
}

export default App
