import "./App.css"
import Message from "../Message/Message"

function App({ myName }) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello world!</h3>
        <h3>My name is {myName}</h3>
        <Message text="I'm from Novosib" />
      </header>
    </div>
  )
}

export default App
