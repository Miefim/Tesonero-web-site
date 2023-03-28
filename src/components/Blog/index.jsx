import SeparateLine from '../UI/SeparateLine'
import style from './index.module.css'

const Blog = () => {
   return(
      <div className={style.blog}>
         <SeparateLine className={style.line}/>
         <title className={style.title}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</title>
         <div className={style.mainQuote}>
            <img className={style.mainQuote_avatar} src="/images/blogAvatar.svg" alt="" />
            <div className={style.mainQuote_quote}>
               <div className={style.quotationMark}>
                  <img src="/images/blogQuotes.svg" alt="" />
                  <img src="/images/blogQuotes.svg" alt="" />
               </div>
               <div className={`${style.quotationMark} ${style.quotationMarkEnd}`}>
                  <img src="/images/blogQuotes.svg" alt="" />
                  <img src="/images/blogQuotes.svg" alt="" />
               </div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                  animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi
                  expedita, provident excepturi officia!
                  Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?
               <div className={style.quote_author}>Jane Doe</div>
            </div>
         </div>
         <div className={style.secondaryQuotes}>
            <div className={style.secondaryQuotesUnit}>
               <div className={style.secondaryQuotes_quotes}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                  animi  autem aliquid
                  <div className={style.quote_author}>Jane Doe</div>
               </div>
               <img className={style.secondaryQuote_avatar} src="/images/blogAvatar.svg" alt="" />
            </div>
            <div className={style.secondaryQuotesUnit}>
               <img className={style.secondaryQuote_avatar} src="/images/blogAvatar.svg" alt="" />
               <div className={style.secondaryQuotes_quotes}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                  animi  autem aliquid
                  <div className={style.quote_author}>Jane Doe</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Blog