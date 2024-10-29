import React, { useState } from 'react'
import './App.css'
import Task1 from './Task1'

class App extends React.Component {
render(){
  return (
    <>
      <h1 style={{color: "white" , backgroundColor:"sienna"}}>Users</h1>
      <Task1 firstname='Tony' lastname='Stark'/>
      <Task1 firstname='James' lastname='Mary'/>
      <Task1 firstname='Vikram' lastname='Rathod'/>

      </>
  )
    
}
}
export default App
