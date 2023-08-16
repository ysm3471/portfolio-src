import React,{memo} from 'react';
import classes from './ProjectsTitle.module.css'

function ProjectsTitle() {
  return (
    <div className={classes.ProjectsTitle}>
      <div className={classes.img}>
        <img src="img/Projects.png" alt="Projects" />
      </div>
      <h2>My projects</h2>
    </div>
  )
}

export default memo(ProjectsTitle);   // 한 번만 리렌더링 되도록 
