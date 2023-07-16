import React from 'react';
import classes from './Header.module.css'
import ProfileLeft from './ProfileLeft';
import ProfileRight from './ProfileRight';
import ProfileDetail from './ProfileDetail/ProfileDetail';

export default function Header({showToggle,on,opened}) {
  return (
    <header className={classes.Header}>
      <ProfileLeft/>
      <ProfileRight  showToggle={showToggle} opened={opened}/>
      <ProfileDetail  showToggle={showToggle} on={on} />
    </header>
  )
}
