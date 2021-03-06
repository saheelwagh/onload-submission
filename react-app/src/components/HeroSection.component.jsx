import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function HeroSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} >
          <h6>Community of Change Makers</h6>
          </Paper>
      
      <Paper elevation={3}>
        Image
      </Paper>
    </div>
  );
}