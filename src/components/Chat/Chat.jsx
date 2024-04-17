import React, { useEffect, useState } from "react"
import styles from "./Chat.module.scss"

function Chat() {
  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState({
    text: "",
    author: "",
  })
  const ROBOT_MESSAGE =
    "Рад приветствовать на нашем ресурсе! Сейчас все людишки заняты, поэтому я поработаю немного за них, правда я умею очень мало. Я могу лишь присылать это сообщение каждый раз после вашего сообщения. Но что поделать такая у меня функция и роль. Скоро кто-нибудь из людишек освободиться и ответит вам! Наберитесь терпения!"
  useEffect(() => {
    setMessageList([
      {
        text: "Привет, мир",
        author: "Реакт программа",
      },
      {
        text: "Привет, программа",
        author: "Иван",
      },
      {
        text: "Как дела?",
        author: "Иван",
      },
      {
        text: "Error 404",
        author: "Реакт программа",
      },
      {
        text: "Ну что ж, с первым падением билда товарищи",
        author: "Иван",
      },
    ])
  }, [])
  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList.slice(-1)[0].author !== "Bot-bibot" &&
      messageList.slice(-1)[0].author !== "Иван"
    ) {
      sendRobotMessage()
    }
  }, [messageList])

  function sendRobotMessage() {
    setTimeout(
      () =>
        setMessageList((prev) => [
          ...prev,
          { author: "Bot-bibot", text: ROBOT_MESSAGE },
        ]),
      1500
    )
  }

  function sendMessage(e) {
    e.preventDefault()
    setMessageList((prev) => [...prev, message])
    setMessage({
      text: "",
      author: "",
    })
    // sendRobotMessage()
  }
  return (
    <div className={styles["messages"]}>
      <form className={styles["messages__form"]} onSubmit={sendMessage}>
        <input
          value={message.text}
          type="text"
          className={styles["messages__input"]}
          onInput={(e) =>
            setMessage({
              author: "Ivan",
              text: `${e.target.value}`,
            })
          }
        />
        <button className={styles["messages__button"]}>
          Отправить сообщение
        </button>
      </form>
      {messageList
        .map((message, index) => {
          return (
            <div className={styles["message"]} key={index}>
              <h6 className={styles["message__title"]}>{message.author}</h6>
              <p className={styles["message__text"]}>{message.text}</p>
            </div>
          )
        })
        .reverse()}
    </div>
  )
}

export default Chat