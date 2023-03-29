import { useState } from 'react'

import DropDown from '../UI/DropDown'
import SeparateLine from '../UI/SeparateLine'
import style from './index.module.css'

const DropDownBlock: React.FC = () => {
   const [visible, setVisible] = useState<string | null>(null)
   return(
      <div className={style.ddBlock}>
         <SeparateLine className={style.line}/>
         <title className={style.title}>
            Lorem ipsum, dolor sit 
            adipisicing elit.
            <div className={style.subtitle}>
               Porro ab rerum omnis magnam eligendi error nobis dolore?
            </div>
         </title>
         <div className={style.ddList}>
            <DropDown 
               id={'1'} 
               visible={visible} 
               setVisible={setVisible} 
               styleHeader={style.ddHeader} 
               styleBody={style.ddBody}
            >
               <div>
                  <img className={style.ddImg} src="/images/dropDownIcon1.svg" alt="" />
                  <div>
                     Lorem ipsum, dolor sit amet adipisicing elit.
                  </div>
               </div>
               <div>
                  Laboriosam quas, aut consectetur animi autem aliquid consequuntur 
                  suscipit exercitationem laborum cupiditate magnam eaque quae delenit
               </div>
            </DropDown>
            <DropDown 
               id={'2'} 
               visible={visible} 
               setVisible={setVisible} 
               styleHeader={style.ddHeader} 
               styleBody={style.ddBody}
            >
               <div>
                  <img className={style.ddImg} src="/images/dropDownIcon2.svg" alt="" />
                  <div>
                     Lorem ipsum, dolor sit amet adipisicing elit.
                  </div>
               </div>
               <div>
                  Laboriosam quas, aut consectetur animi autem aliquid consequuntur 
                  suscipit exercitationem laborum cupiditate magnam eaque quae delenit
               </div>
            </DropDown>
            <DropDown 
               id={'3'} 
               visible={visible} 
               setVisible={setVisible} 
               styleHeader={style.ddHeader} 
               styleBody={style.ddBody}
            >
               <div>
                  <img className={style.ddImg} src="/images/dropDownIcon3.svg" alt="" />
                  <div>
                     Lorem ipsum, dolor sit amet adipisicing elit.
                  </div>
               </div>
               <div>
                  Laboriosam quas, aut consectetur animi autem aliquid consequuntur 
                  suscipit exercitationem laborum cupiditate magnam eaque quae delenit
               </div>
            </DropDown>
            <DropDown 
               id={'4'} 
               visible={visible} 
               setVisible={setVisible} 
               styleHeader={style.ddHeader} 
               styleBody={style.ddBody}
            >
               <div>
                  <img className={style.ddImg} src="/images/dropDownIcon4.svg" alt="" />
                  <div>
                     Lorem ipsum, dolor sit amet adipisicing elit.
                  </div>
               </div>
               <div>
                  Laboriosam quas, aut consectetur animi autem aliquid consequuntur 
                  suscipit exercitationem laborum cupiditate magnam eaque quae delenit
               </div>
            </DropDown>
            <DropDown 
               id={'5'} 
               visible={visible} 
               setVisible={setVisible} 
               styleHeader={style.ddHeader} 
               styleBody={style.ddBody} 
               className={style.lastdd}
            >
               <div>
                  <img className={style.ddImg} src="/images/dropDownIcon5.svg" alt="" />
                  <div>
                     Lorem ipsum, dolor sit amet adipisicing elit.
                  </div>
               </div>
               <div>
                  Laboriosam quas, aut consectetur animi autem aliquid consequuntur 
                  suscipit exercitationem laborum cupiditate magnam eaque quae delenit
               </div>
            </DropDown>
         </div>
      </div>
   )
}

export default DropDownBlock