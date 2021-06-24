import React from "react";
import useStyles from "./styles";
import Drawer from "../drawer";

interface Props {
  children?: React.ReactNode;
}

export default function Dashboard({ children }: Props) {
  const classes = useStyles();
  return (
    <>
      <Drawer />
      <main className={classes.content}>{children}</main>
    </>
  );
}
