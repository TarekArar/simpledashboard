import React from "react";
import Grid from "@material-ui/core/Grid";
import { VictoryPie, VictoryAxis, VictoryTheme } from "victory";
import SmallCard from "../cards/smallCard";
import CardWrapper from "../cardWrapper";
import { SmallCardDataType } from "../../types";
import {
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  data: Array<SmallCardDataType>;
}

export default function CardsList({ data }: Props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {data.map((el: SmallCardDataType, idx: number) => (
          <Grid item xs={3} key={idx}>
            <SmallCard {...el} />
          </Grid>
        ))}
        <Grid item xs={6}>
          <CardWrapper
            header={<CardHeader title={"Daily Hours"} />}
            main={
              <svg width={600} height={350}>
                <VictoryAxis
                  crossAxis
                  width={600}
                  height={350}
                  domain={[0, 50]}
                  theme={VictoryTheme.material}
                  offsetY={100}
                  standalone={false}
                />
                <VictoryAxis
                  dependentAxis
                  crossAxis
                  width={600}
                  height={350}
                  domain={[0, 50]}
                  theme={VictoryTheme.material}
                  offsetX={100}
                  standalone={false}
                />
              </svg>
            }
          />
        </Grid>
        <Grid item xs={6}>
          <CardWrapper
            header={
              <CardHeader
                actions={
                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    hi
                  </div>
                }
                title={"Breakdown of hours last 30 days"}
              />
            }
            main={<VictoryPie data={[{ x: "Birds", y: 100 }]} height={200} />}
          />
        </Grid>
      </Grid>
    </div>
  );
}
