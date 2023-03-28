import Button from '../UI/Button'
import style from './index.module.css'

const Header = () => {
   return(
      <header className={style.header}>
         <div className={style.logo}>
            <div className={style.logo_left}>
               PRODUCT
            </div>
            <div className={style.logo_right}>
               <img src='/images/logo2.svg' alt="" />
               <img className={style.logo_icon} src='/images/logo.svg' alt="" />
            </div>
         </div>
         <nav className={style.nav}>
            <Button>NavItem1</Button>
            <Button>NavItem2</Button>
            <Button>NavItem3</Button>
         </nav>
         <Button className={style.headerBtn}>Button</Button>
      </header>
   )
}

export default Header