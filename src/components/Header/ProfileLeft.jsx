import React from 'react';
import classes from './ProfileLeft.module.css'

export default function ProfileLeft() {
  return (
    <div className={classes.ProfileLeft}>
      <h1>
        <p>Front-end</p>
        <p>developer</p>        
      </h1>
      <div className={classes.text}>
        <p>Hi ! 👋, My name is</p>
        <p className={classes.name}>You-Sangmoon</p>        
      </div>
    </div>
  )
}
