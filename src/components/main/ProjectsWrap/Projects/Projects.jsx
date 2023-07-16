import React, { useState } from 'react';
import classes from './Projects.module.css'
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail/ProjectDetail';

export default function Projects({cardData}) {
  const [on,setOn] = useState(false);   // detailCard의 상태를 관리하는 state
  const [num,setNum] = useState();    // card의 id값을 저장하는 state

  function showToggle(index) {    // datailCard의 토글버튼
    setNum(index);
    setOn(show => !show);
  }

  const cards = cardData.map((aa) => {    // key값을 대충 주면 sort시에 제대로 되지 않음
    return <ProjectCard data={aa} key={aa.id} showToggle={showToggle}/>
  })
  return (
    <>
      <div className={classes.Projects}>
        {cards}
      </div>
      <ProjectDetail showToggle={showToggle} num={num} on={on}/>
    </>
  )
}
