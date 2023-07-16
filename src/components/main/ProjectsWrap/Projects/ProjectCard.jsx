import React from 'react';
import classes from './ProjectCard.module.css'

export default function ProjectCard({data,showToggle}) {
  const {title, content, useSkills,img ,id} = data

  return (
    <div className={classes.ProjectCard}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className={classes.skill}>{useSkills}</div>
      <div className={classes.img}>
        <img src={img} alt={title} />
      </div>
      <div className={classes.detail}>
        <div className={classes.btn} onClick={() => showToggle(id-1)}>
          <p>자세히 보기</p>
        </div>
      </div>
    </div>
  )
}
