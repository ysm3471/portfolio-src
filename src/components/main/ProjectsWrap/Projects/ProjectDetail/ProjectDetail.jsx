import React from 'react';
import Modal from '../../../../Modal/Modal';
import Dark from '../../../../Modal/Dark';
import classes from './ProjectDetail.module.css';
import data from './card-detail.json'
import Slider from './Slider';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectDetail({ showToggle, num,on }) {
    const cardData = data.data[num];

    return (
      <Modal>
        <AnimatePresence>
          {on && 
          <>
            <Dark />
            <motion.div
              initial={{ x: "-50%", y: "-48%", opacity: 0 }}
              animate={{ x: "-50%", y: "-50%", opacity: 1 }}
              exit={{ x: "-50%", y: "-48%", opacity: 0 }}
              transition={{ duration: .3 }}
              className={classes.ProjectDetail}>
              {cardData.slider ?
                <Slider num={num} />
                :
                <div className={classes.img} onClick={() => { window.open(cardData.site) }}>
                  <img src={cardData.img} alt={cardData.title} title='클릭하면 이동합니다' />
                </div>
              }
              <div className={classes.contentBox}>
                <h3>{cardData.title}</h3>
                <div className={classes.content}>
                  <div className={classes.leftContent}>
                    <div>
                      <div>CATEGORY</div>
                      <div>{cardData.category}</div>
                    </div>
                    <div>
                      <div>Use Skills</div>
                      <div>{cardData.useSkills}</div>
                    </div>
                    <div>
                      <div>Git Hub</div>
                      <div className={classes.github} onClick={() => { window.open(cardData.github) }}><img src="img/github.png" alt="github" title="깃허브로 이동" /></div>
                    </div>
                  </div>
                  <div className={classes.rightContent}>
                    <p>{cardData.content}</p>
                  </div>
                </div>
              </div>
              <div className={classes.cancleBtn} onClick={showToggle}>
                <img src="img/cancle.png" alt="cancle" />
              </div>
            </motion.div>          
          </>}
        </AnimatePresence>
      </Modal>
    )    
  }

