import style from './index.module.css'

const SeparateLine = ({className}) => {
   return(
      <div className={`${style.separateLine} ${className}`}></div>
   )
}

export default SeparateLine