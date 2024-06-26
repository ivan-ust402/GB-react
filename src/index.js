import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./components/App/"
import reportWebVitals from "./reportWebVitals"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#b388ff",
    },
    secondary: {
      main: "#cddc39",
    },
  },
})
const myName = "Ivan"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App myName={myName} />
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
