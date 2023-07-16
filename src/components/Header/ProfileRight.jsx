import React, { useEffect } from 'react';
import classes from './ProfileRight.module.css';
import { motion, useAnimationControls } from "framer-motion";
import { useHover } from '@uidotdev/usehooks';

export default function ProfileRight({ showToggle,opened }) {
  const controls = useAnimationControls()   // framer-motion의 애니메이션을 컨트롤
  const [ref, hovering] = useHover();   // npm i @uidotdev/usehooks

  useEffect(() => {
    if (hovering) {   // hovering중이면 이전의 애니메이션을 종료하고 댐핑애니메이션 실행
      controls.stop();
      controls.start({
          scale: 1.2,
          transition: { type: "spring", stiffness: 400, damping: 10 }
      })
    }
    else if (opened) {    // 한번 열린 상태라면 애니메이션 초기화
      controls.start({
        scale:1,
        rotate:0
      })
    }
    else {
      controls.start({    // 애니메이션 초기화
        scale:1
      })
      controls.start({    // 흔들거리는 애니메이션
        rotate: [0, 7, -7, 0],
        transition: {
          delay:1.3,
          duration: 0.8,
          repeat: Infinity,
          repeatDelay: 1,
        }
      })
    }
  }, [hovering,opened])

  return (
    <motion.div
      animate={controls}
      ref={ref}
      className={classes.ProfileRight} onClick={showToggle}>
      <img src="img/AvatarAndIcons.svg" alt="AvatarAndIcons" />
    </motion.div>
  )
}
