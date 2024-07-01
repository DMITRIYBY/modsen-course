import {Fragment, useState} from 'react'
import './App.css'
import {ElementsList} from "./components/ElementsList/ElementsList.tsx";
import {Counter} from "./components/Counter/Counter.tsx";
import {Form} from "./components/Form/Form.tsx";

function App() {

  return (
       <div className="app__container">
           <ElementsList />
           <Counter />
           <Form />
       </div>
  )
}

export default App
