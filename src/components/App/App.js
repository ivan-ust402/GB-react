import "./App.css"
import Message from "../Message"
import MaterialUI from "../MaterialUI"
import SomeNestedChild from "../SomeNestedChild/SomeNestedChild"
import Chat from "../Chat"
import ChatMUI from "../ChatMUI"

function App({ myName }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Homework 1</h1>
        My First React App
        <h3>Hello world!</h3>
        <h3>My name is {myName}</h3>
        <Message text="I'm from Novosib" />
        <hr
          style={{
            color: "white",
            backgroundColor: "white",
            width: "100%",
            marginBottom: "20px",
          }}
        />
        <h1>Homework 2</h1>
        <Chat />
        <hr
          style={{
            color: "white",
            backgroundColor: "white",
            width: "100%",
            marginBottom: "20px",
          }}
        />
        <h1>ClassWork 3</h1>
        <MaterialUI />
        <SomeNestedChild />
        <hr
          style={{
            color: "white",
            backgroundColor: "white",
            width: "100%",
            marginBottom: "20px",
          }}
        />
      </header>
      <section className="center">
        <h1>Homework 3</h1>
        <ChatMUI />
      </section>
    </div>
  )
}

export default App
