import { useRef } from 'react'

import { useSlider } from '../../hooks/useSlider'
import style from './index.module.css'

type SliderProps = {
   children: JSX.Element[]
}

const Slider: React.FC<SliderProps> = ({children}) => {
   const unitRef = useRef<HTMLDivElement>(null)
   const maxIndex = children.length - 1
   const unitWidth = unitRef?.current?.clientWidth ? unitRef.current.clientWidth : 0

   const [index, transformTape, increment, decrement, setIndex, start, move, end, cancelTransform] = useSlider({maxIndex, unitWidth})
  
   return(
      <div className={style.slider}>
         <div className={style.win}>
            <div 
               className={style.tape} 
               style={{transform: `translateX(-${transformTape}px)`}}
               onMouseDown={start} 
               onMouseMove={move} 
               onMouseUp={end}
               onMouseLeave={cancelTransform}
               onTouchStart={start}
               onTouchMove={move}
               onTouchEnd={end}
            >
               {
                  children.map((_, i) => 
                     <div className={style.unit} key={i} ref={unitRef}>
                        {children[i]}
                     </div>  
                  )
               }    
            </div>
         </div>
         <div className={style.nav}>
            <img 
               className={`${style.nav_arrowLeft} ${index === 0 && style.noActive}`} 
               src="/images/arrowDown.svg" alt="" 
               onClick={decrement}
            />
            <div className={style.points}>
               {
                  children.map((_, i) => 
                     <div 
                        className={`${style.point} ${index === i && style.activePoint}`} 
                        key={i}
                        onClick={() => setIndex(i)}
                     />
                  )
               }
            </div>
            <img 
               className={`${style.nav_arrowRight} ${index === maxIndex && style.noActive}`} 
               src="/images/arrowDown.svg" alt="" 
               onClick={increment}
            />
         </div>
      </div>
   )
}

export default Slider