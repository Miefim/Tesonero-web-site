import style from './index.module.css'

type SeparateLineProps = {
   className?: string
}

const SeparateLine: React.FC<SeparateLineProps> = ({className}) => {
   return(
      <div className={`${style.separateLine} ${className}`}></div>
   )
}

export default SeparateLine