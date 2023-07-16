import React, { useState } from 'react';
import classes from './Contact.module.css';
import { motion } from 'framer-motion';

export default function Contact() {
  const [on, setOn] = useState();   // copy 효과를 관리하는 state
  const MoveToTop = () => {   // 맨 위로 이동하는 함수
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyClipBoard = async () => {   // 클릭하면 지정한 텍스트를 clipboard에 추가해주는 함수
    try {
      await navigator.clipboard.writeText("ysm3471@naver.com");
      setOn(true);
      setTimeout(() => {    // 애니메이션이 동작하는 시간
        setOn(false);
      }, 1000)
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };
  return (
    <div className={classes.Contact} id='3'>
      <h3>
        <div>
          <img src="img/contact.png" alt="contact" />
        </div>
        <p>Thanks for reading</p>
      </h3>
      <div className={classes.content}>
        <div className={classes.email}>
          <div className={classes.emailImg}>
            <div>
              <img src="img/email.png" alt="email" />
            </div>
            <p>E-mail:</p>
          </div>
          <p>ysm3471@naver.com</p>
          <div className={classes.paste} onClick={handleCopyClipBoard}>
            {on ?
              <motion.p
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .3 }}
              >copied
              </motion.p>
              :
              <img src="img/paste.png" alt="paste" />}
          </div>
        </div>
        <div className={classes.topBtn} onClick={MoveToTop}>
          <p>Go Top</p>
          <div>
            <img src="img/Top.png" alt="top" />
          </div>
        </div>
      </div>
    </div>
  )
}
