import React from 'react';
import classes from './ProjectsNavBtn.module.css';
import data from '../Projects/card.json'

export default function ProjectsNavBtn({btnData,setCardData,setNavBtns,NavBtns,index,setShow}) {
  const {tag,img,active} = btnData

  function sortBtn() {    // project card를 sort해주는 함수
    let copy = data.data;
    copy = copy.filter((aa) => {
      return aa.useSkills === tag
    })
    setCardData(copy);
    setShow(false)
    setActive();
  }

  function showAll() {    // 모두 보여주는 버튼
    setCardData(data.data);
    setShow(false)
    setActive();
  }

  function setActive() {    // active class를 부여해주는 함수
    let copy = [...NavBtns];
    copy.forEach((aa) => aa.active=false);
    copy[index].active = true;
    setNavBtns(copy);
  }


  return (
    <>
      {img ? <div className={active ? `${classes.ProjectsNavBtn} ${classes.active}` : classes.ProjectsNavBtn} onClick={sortBtn}>
        <div className={classes.img}>
          <img src={img} alt={tag} />
        </div>
        <div>
          <p>{tag}</p>
        </div>
      </div>
      : <div className={active ? `${classes.ProjectsNavBtn} ${classes.active}` : classes.ProjectsNavBtn} onClick={showAll}>
      <div>
        <p>{tag}</p>
      </div>
    </div>
    }    
    </>
  )
}
