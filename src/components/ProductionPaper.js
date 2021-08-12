import React, { Children } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import yellow from "@material-ui/core/colors/yellow";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { WaterBox } from ".";
// watch the video
// https://react.school/material-ui/paper

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    }
  },
 
  customBorder: {
    border: `3px solid ${yellow[200]}`
  },
  customBorderRadius: {
    borderRadius: 25
  }
}));

export default function ProductionPaper({title, children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.customBorderRadius} elevation={15}>
        <Box p={1}>
          <Typography variant="h5">{title}</Typography>
        </Box>
        {children}
      </Paper>
    </div>
  );
}
