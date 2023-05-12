import Lesson from './app.js'
import React from 'react'
import ReactDOM from 'react-dom/client'

// ↓↓↓ 👋 Update this line to change the lesson number ↓↓↓
// import Lesson from "./lessons/complete/app";

function App() {
	return <Lesson />
}

const rootElement = document.getElementById('root')

// ReactDOM.render(<App />, rootElement); // Blocking Mode
ReactDOM.createRoot(rootElement).render(<App />) // Concurrent Mode
