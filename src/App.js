import logo from "./logo.svg"
import "./App.css"

function App({ myName }) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello world!</h3>
        <h3>My name is { myName }</h3>
      </header>
    </div>
  )
}

export default App
