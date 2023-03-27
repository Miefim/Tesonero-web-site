import style from './index.module.css'

const DropDown = ({children, className, visible, setVisible, id, ...props}) => {
   return(
      <div className={`${style.dd} ${className}`} onClick={(e) => setVisible(visible === e.currentTarget.id ? null : e.currentTarget.id)} id={id} {...props}>
         <div className={`${style.ddHeader} ${visible === id && style.green}`}>
            {children[0].props.children}
         </div>
         <div className={`${style.ddBody} ${visible === id && style.visible}`}>
            {children[1]}
         </div>
         <img className={`${style.ddArrow} ${visible === id && style.rotate180}`} src="/images/arrowDown.svg" alt="" />
      </div>
   )
}

export default DropDown