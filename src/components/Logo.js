import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { SvgIcon } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import logo from "../DropItLogo.png"
const useStyles = makeStyles({
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
  });

export default function Logo() {
  const classes = useStyles();

  return (
            <Icon classes={{root: classes.iconRoot}}>
                <img style={{height: "100px"}} className={classes.imageIcon} src={logo}/>
            </Icon>
              );
};