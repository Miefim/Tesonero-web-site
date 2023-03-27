import style from './index.module.css'

const Button = ({children, className}) => {
   return(
      <button className={`${style.button} ${className}`}>{children}</button>
   )
}

export default Button