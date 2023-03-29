import style from './index.module.css'

type ButtonProps = {
   children: JSX.Element | string,
   className?: string
}

const Button: React.FC<ButtonProps> = ({children, className}) => {
   return(
      <button className={`${style.button} ${className}`}>{children}</button>
   )
}

export default Button