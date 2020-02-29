import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function RecipeBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Grid container spacing={3}>
        
        <Grid item xs={12}>
            <Paper className={classes.paper}><h1>Our Recipe of Kindness</h1></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
              <h2>Patron Funding</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore libero suscipit!</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
              <h2>Volunteer efforts</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore libero suscipit!</p>
          </Paper>        </Grid>
        <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
              <h2>Students Benefiting</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore libero suscipit!</p>
          </Paper>        </Grid>
      </Grid>
    </div>
  );
}