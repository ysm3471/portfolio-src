import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-scroll';   // 스크롤 위치 이동을 위한 외부 라이브러리

export default function Nav({showToggle}) {
  return (
    <div className={classes.Nav}>
      <ul>
        <li onClick={showToggle}>About</li>
        <li><Link to="1" spy={true} smooth={true} offset={345} duration={500}>Skills</Link></li>
        <li><Link to="2" spy={true} smooth={true} offset={-150} duration={800}>My Works</Link></li>
        <li><Link to="3" spy={true} smooth={true} duration={1050}>Contact</Link></li>
      </ul>
    </div>
  )
}
