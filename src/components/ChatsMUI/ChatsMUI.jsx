import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material"
import React, { useEffect, useState } from "react"

export default function ChatsMUI() {
  const [chatList, setChatList] = useState([])

  useEffect(() => {
    setChatList([
      {
        id: 0,
        name: "Семья",
      },
      {
        id: 1,
        name: "Друзья",
      },
      {
        id: 2,
        name: "Коллеги",
      },
    ])
  }, [])
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 200,
        height: 'fit-content',
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ textAlign: "start" }}
        >
          Мои чаты
        </ListSubheader>
      }
    >
      {chatList.map((chatItem) => {
        return (
          <ListItemButton>
            <ListItemText
              key={chatItem.id}
              primary={chatItem.name}
              sx={{ textAlign: "start" }}
            ></ListItemText>
          </ListItemButton>
        )
      })}
    </List>
  )
}
