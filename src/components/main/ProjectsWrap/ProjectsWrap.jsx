import React, { useState, useEffect } from 'react';
import classes from './ProjectsWrap.module.css'
import ProjectsTitle from './ProjectsTitle/ProjectsTitle';
import ProjectsNav from './ProjectsNav/ProjectsNav';
import Projects from './Projects/Projects';
import data from './Projects/card.json';
import { motion } from "framer-motion";


export default function ProjectsWrap() {
  const [cardData, setCardData] = useState(data.data);    // json 파일의 data를 관리하는 state
  const [show, setShow] = useState(false);    // projectCard의 애니메이션을 위한 state

  useEffect(() => {   // nav버튼을 누를때마다 리렌더링 시키는 방법
    setShow(true);
  }, [cardData])

  function showToggle(boolean) {
    setShow(boolean)
  }

  return (
    <div className={classes.ProjectsWrap} id='2'>
      <div className={classes.head}>
        <ProjectsTitle />
        <ProjectsNav setCardData={setCardData} showToggle={showToggle} />
      </div>
      {show && <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: .4 }}
        viewport={{ once: true, amount: 0.15 }}
      ><Projects cardData={cardData} /></motion.div>}
    </div>
  )
}

