import React from 'react'
import Styles from './Message.module.scss'



export default function Message({text}) {
  return (
    <div className= { Styles.message }>{ text }</div>
  )
}

