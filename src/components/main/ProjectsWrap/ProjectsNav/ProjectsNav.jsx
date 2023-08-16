import React, { useState } from 'react';
import classes from './ProjectsNav.module.css'
import ProjectsNavBtn from './ProjectsNavBtn';



export default function ProjectsNav({ setCardData,showToggle }) {
  const [NavBtns, setNavBtns] = useState([
    {
      tag: "All",
      active: true
    },
    {
      tag: "JavaScript",
      img: "img/javascript.png",
      active: false
    },
    {
      tag: "React",
      img: "img/react.png",
      active: false
    },
    {
      tag: "Next js",
      img: "img/nextjs-icon-dark.png",
      active: false
    }
  ])

  const ProjectsNavBtns = NavBtns.map((aa, index) => {
    if (aa.img) return <ProjectsNavBtn key={index} btnData={aa} NavBtns={NavBtns} setNavBtns={setNavBtns} setCardData={setCardData} showToggle={showToggle} index={index} />
    else return <ProjectsNavBtn key={index} btnData={aa} NavBtns={NavBtns} setNavBtns={setNavBtns} setCardData={setCardData} showToggle={showToggle} index={index} />
  })

  return (
    <div className={classes.ProjectsNav}>
      {ProjectsNavBtns}
    </div>
  )
}
