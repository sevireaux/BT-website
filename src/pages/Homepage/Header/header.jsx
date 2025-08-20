import React from 'react';
import './header.scss';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { images } from '../../../constants';

const Header = () => {
  return (
    <div className='app__header' id='#Home'>

    <motion.div whileInView={{scale: [0.75, 1], opacity: [0, 0.5, 1]}}
    transition={{duration: 0.5, ease: 'easeInOut'}}
    className='app__header-info'>
        <div className='app__content'>
          <h1 className='headline h1-text'>More Than a Coffee, It's a Vintage</h1>
          <p className='p-text'>Every cup is steeped in history, not just flavor. 
          We blend tradition with taste to bring you a brew that feels timeless. 
          This isn't just coffee—it's a nostalgic journey in every sip.</p>
        </div>
        <button className='app__order'>Drink Now</button>
  </motion.div>
  <motion.div whileInView={{scale: [0.75, 1]}}
      transition={{duration: 0.5, ease: 'easeInOut'}}
    className='app__hero'>
      <img src={images.hero1} alt='Hero' className='hero'/>
  </motion.div>
  </div>
=======

const Header = () => {
  return (
    <div>
      
    </div>
>>>>>>> 13394e2ce7fb99818a70df4f1da1f372b0fe65ed
  )
}

export default Header
