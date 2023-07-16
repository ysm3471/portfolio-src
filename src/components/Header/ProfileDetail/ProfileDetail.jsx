import React from 'react';
import classes from './ProfileDetail.module.css'
import Modal from '../../Modal/Modal';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfileDetail({ showToggle,on }) {
  return (
      <Modal>
        <AnimatePresence>
        {on && <motion.div
          initial={{ x:"-50%", y: "-48%", opacity: 0 }}
          animate={{ x:"-50%", y: "-50%", opacity: 1 }}
          exit={{ x:"-50%", y: "-48%", opacity: 0 }}
          transition={{ duration: .5 }}
          className={classes.ProfileDetail}>
          <div className={classes.wrap}>
            <div className={classes.left}>
              <img src="img/IMG_7194.jpg" alt="my_photo" />
            </div>
            <div className={classes.right}>
              <h3>안녕하세요 프론트엔드 개발자 유상문입니다</h3>
              <div>
                <p>저는 배우는 것을 좋아하며 늘 찾아다닙니다.</p>
                <br />
                <blockquote>
                  <p>“아직 먹어보지 못한 것을 먹고, </p>
                  <p>&emsp;보지 못한 것을 보는 것만큼 유쾌한 것은 없다.” </p>
                </blockquote>
                <br />
                <p>나츠메 소세키의 소설 나는 고양이로소이다에 나오는 말입니다.</p>
                <p>저에게 있어서 배운다는 것은 유쾌한 일입니다.</p>
                <p>모르는 것을 앎으로써 세상을 보는 시야가 넓어지기 때문입니다.</p>
                <br />
                <p>아래의 프로젝트는 시간순으로 배열해놨으며 각 소개에는 </p>
                <p>제가 무엇을 배웠는지, 배우려고 했는지 적어놨습니다.  </p>
              </div>
            </div>
          </div>
          <div className={classes.cancleBtn} onClick={showToggle}>
            <img src="img/cancle.png" alt="cancle" />
          </div>
        </motion.div>}
        </AnimatePresence>
      </Modal>
  )
}
