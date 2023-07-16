import { useState } from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProjectsWrap from './components/main/ProjectsWrap/ProjectsWrap';
import Skills from './components/main/Skills/Skills';

function App() {
  const [on,setOn] = useState(false);   // profileCard의 상태를 관리하는 state
  const [opened,setOpened] = useState(false);   // 열린 기록을 체크하는 state

  function showToggle() {
    setOn(show => !show)
    setOpened(true);
  }

  return (
    <div className="App">
      <Nav showToggle={showToggle}/>
      <Header showToggle={showToggle} on={on} opened={opened}/>
      <main>
        <Skills/>
        <ProjectsWrap/>
      </main>
      <Contact/>
    </div>
  );
}

export default App;
