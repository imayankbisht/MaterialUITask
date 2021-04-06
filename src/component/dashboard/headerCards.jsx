import React from "react";

import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontSize: "1rem"
  },
  paper: {
    padding: "0.1em 0.8em ",
    textAlign: "left",
    color: theme.palette.text.secondary
  }
}));

const HeaderCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper square className={classes.paper}>
            <p>Today's Order- 200</p>
            <p>Current Week Order- 450</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper square className={classes.paper}>
            <p>Today's Order Amount- 20000</p>
            <p>Current Week Amount- 45000</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper square className={classes.paper}>
            <p>MTD Order- 400</p>
            <p>Last Month Order- 200</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper square className={classes.paper}>
            <p>MTD Order Amount- 65000</p>
            <p>Last Month Amount- 45000</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderCards;
