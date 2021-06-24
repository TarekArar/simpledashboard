import React from "react";
import Card from "@material-ui/core/Card";
import useStyles from "./styles";
import clsx from "clsx";

interface Props {
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function CardWrapper({ header, main, footer }: Props) {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root)}>
      {header}
      {main}
      {footer}
    </Card>
  );
}
