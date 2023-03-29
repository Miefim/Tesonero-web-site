import Slider from '../Slider'
import style from './index.module.css'

type BannerProps = {
   className: string
}

const BannerMobile: React.FC<BannerProps> = ({className}) => {
   return (
      <div className={`${style.bannerMobile} ${className}`}>
         <div className={style.mainImgBlock}>
            <img className={style.mainImg} src="/images/mobileBanner.svg" alt="" />
         </div>
         <title className={style.title}>
            LOREM IPSUM, DOLOR SIT AMET CONSECTETUR
         </title>
         <Slider>
            <div className={style.card}>
               <img src="/images/bannerIcon1.svg" alt="" />
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={style.card}>
               <img src="/images/bannerIcon2.svg" alt="" />
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={style.card}>
               <img src="/images/bannerIcon3.svg" alt="" />
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={style.card}>
               <img src="/images/bannerIcon4.svg" alt="" />
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={style.card}>
               <img src="/images/bannerIcon1.svg" alt="" />
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={style.card}>
               <img src="/images/bannerIcon2.svg" alt="" />
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
         </Slider>  
      </div>
   )
}

export default BannerMobile