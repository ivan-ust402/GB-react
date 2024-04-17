import { useTheme } from "@mui/material"; 
import { Button } from "@mui/base";
import React from "react"

export default function SomeNestedChild() {
    const theme = useTheme();
  return <Button
            style={{
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.secondary.main
            }}
            >
                Change Theme
            </Button>
}
