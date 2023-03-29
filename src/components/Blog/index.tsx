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
                  <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className={style.quoteSvg} d="M19.4804 16.5425C19.4804 21.7657 15.1319 26 9.76674 26C4.40157 26 0.507458 21.9116 0.0531052 16.7069C-0.640556 8.76502 5.55625 2.11552 13.0795 0C10.5151 1.50963 8.72625 4.13515 8.42795 7.18869C8.86708 7.12801 9.31144 7.08493 9.76674 7.08493C15.1319 7.08493 19.4804 11.3187 19.4804 16.5425Z" fill="#00C368"/>
                  </svg>
                  <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className={style.quoteSvg} d="M19.4804 16.5425C19.4804 21.7657 15.1319 26 9.76674 26C4.40157 26 0.507458 21.9116 0.0531052 16.7069C-0.640556 8.76502 5.55625 2.11552 13.0795 0C10.5151 1.50963 8.72625 4.13515 8.42795 7.18869C8.86708 7.12801 9.31144 7.08493 9.76674 7.08493C15.1319 7.08493 19.4804 11.3187 19.4804 16.5425Z" fill="#00C368"/>
                  </svg>
               </div>
               <div className={`${style.quotationMark} ${style.quotationMarkEnd}`}>
                  <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className={style.quoteSvg} d="M19.4804 16.5425C19.4804 21.7657 15.1319 26 9.76674 26C4.40157 26 0.507458 21.9116 0.0531052 16.7069C-0.640556 8.76502 5.55625 2.11552 13.0795 0C10.5151 1.50963 8.72625 4.13515 8.42795 7.18869C8.86708 7.12801 9.31144 7.08493 9.76674 7.08493C15.1319 7.08493 19.4804 11.3187 19.4804 16.5425Z" fill="#00C368"/>
                  </svg>
                  <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className={style.quoteSvg} d="M19.4804 16.5425C19.4804 21.7657 15.1319 26 9.76674 26C4.40157 26 0.507458 21.9116 0.0531052 16.7069C-0.640556 8.76502 5.55625 2.11552 13.0795 0C10.5151 1.50963 8.72625 4.13515 8.42795 7.18869C8.86708 7.12801 9.31144 7.08493 9.76674 7.08493C15.1319 7.08493 19.4804 11.3187 19.4804 16.5425Z" fill="#00C368"/>
                  </svg>
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