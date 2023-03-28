import { useEffect, useState } from 'react'
import SeparateLine from '../UI/SeparateLine'
import style from './index.module.css'

const Banner = ({className}) => {
   const [parallax, setParallax] = useState(0)

   useEffect(() => {
      window.addEventListener('scroll', parallaxCalc)
   })

   const parallaxCalc = () => { 
      setParallax(window.scrollY/7)
   }

   return(
      <div className={`${style.banner} ${className}`}>
         <SeparateLine className={style.line}/>
         <title className={style.title}>LOREM IPSUM, DOLOR SIT AMET CONSECTETUR</title>
         <div className={style.content}>
            <div className={style.content_top}>
               <div className={style.card}>
                  <img src="/images/bannerIcon1.svg" alt="" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </div>
               <div className={style.card}>
                  <img src="/images/bannerIcon2.svg" alt="" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </div>
            </div>
            <div className={style.content_center}>
               <div className={style.card}>
                  <img src="/images/bannerIcon3.svg" alt="" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </div>
               <img className={style.banner_img} src="/images/bannerMain.svg" alt="" />
               <div className={style.card}>
                  <img src="/images/bannerIcon4.svg" alt="" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </div>
            </div>
            <div className={`${style.content_top} ${style.content_bottom}`}>
               <div className={style.card}>
                  <img src="/images/bannerIcon1.svg" alt="" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </div>
               <div className={`${style.card} ${style.card_bottom}`}>
                  <img src="/images/bannerIcon2.svg" alt="" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
               </div>
            </div>
         </div>
         <img className={style.bgLeft} src="/images/bgLeft.svg" alt="" style={{transform: `translateY(${parallax}px)`}}/>
         <img className={style.bgRight} src="/images/bgRight.svg" alt="" style={{transform: `translateY(${parallax}px)`}}/>
      </div>
   )
}

export default Banner