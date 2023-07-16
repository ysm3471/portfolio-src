import React from 'react';
import classes from './ProjectsTitle.module.css'

export default function ProjectsTitle() {
  return (
    <div className={classes.ProjectsTitle}>
      <div className={classes.img}>
        <img src="img/Projects.png" alt="Projects" />
      </div>
      <h2>My projects</h2>
    </div>
  )
}
