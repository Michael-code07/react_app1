import React from 'react'
import { add, subtract, multiply, divide, square, sqrt } from './maths'

export default function App() {
  return (
    <div className="app">
      <h1>React App</h1>
      <p>Welcome to your new React app (Vite).</p>
      
      <div className="maths-demo">
        <h2>Math Functions Demo</h2>
        <ul>
          <li>add(5, 3) = {add(5, 3)}</li>
          <li>subtract(10, 4) = {subtract(10, 4)}</li>
          <li>multiply(6, 7) = {multiply(6, 7)}</li>
          <li>divide(20, 4) = {divide(20, 4)}</li>
          <li>square(8) = {square(8)}</li>
          <li>sqrt(25) = {sqrt(25)}</li>
        </ul>
      </div>
    </div>
  )
}
