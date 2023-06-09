import style from './index.module.css'

type DropDownProps = {
   children: JSX.Element[],
   className?: string,
   visible: string | null,
   setVisible: (arg: string | null) => void,
   id: string,
   styleHeader?: string,
   styleBody?: string,
}

const DropDown: React.FC<DropDownProps> = ({children, className, visible, setVisible, id, styleHeader, styleBody, ...props}) => {
   return(
      <div 
         className={`${style.dd} ${className}`} 
         onClick={(e) => setVisible(visible === e.currentTarget.id ? null : e.currentTarget.id)} 
         id={id} 
         {...props}
      >
         <div className={`${style.ddHeader} ${visible === id && style.green} ${styleHeader}`}>
            {children[0].props.children}
         </div>
         <div className={`${style.ddBody} ${visible === id && style.visible} ${styleBody}`}>
            {children[1]}
         </div>
         <img className={`${style.ddArrow} ${visible === id && style.rotate180}`} src="/images/arrowDown.svg" alt="" />
      </div>
   )
}

export default DropDown