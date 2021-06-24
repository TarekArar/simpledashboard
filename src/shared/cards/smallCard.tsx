import React from "react";
import {
  CardActions,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import clsx from "clsx";

import CardWrapper from "../cardWrapper";
import useStyles from "./styles";
import { SmallCardDataType } from "../../types";

export default function SampleCard({ title, percentage }: SmallCardDataType) {
  const { darkColor, iconColor, main } = useStyles();
  return (
    <CardWrapper
      header={
        <CardHeader
          // className={clsx(darkColor)}
          action={
            <IconButton aria-label="settings" className={iconColor}>
              <CallMadeIcon />
            </IconButton>
          }
          title={<Typography variant="h6">{title}</Typography>}
        />
      }
      main={<div className={main}></div>}
      footer={
        <CardActions className={darkColor}>
          <Typography variant="h5">{percentage}</Typography>
        </CardActions>
      }
    ></CardWrapper>
  );
}
