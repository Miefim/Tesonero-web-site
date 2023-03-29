import { useEffect, useState } from "react"

type IUseSlider = (arg: {
   maxIndex?: number,
   infinity?: boolean,
   unitWidth: number,
   numberUnitsScreen?: number
}) => [
   number, 
   number, 
   React.MouseEventHandler<HTMLDivElement>, 
   React.MouseEventHandler<HTMLImageElement>, 
   React.Dispatch<React.SetStateAction<number>>, 
   React.TouchEventHandler<HTMLDivElement> & React.MouseEventHandler<HTMLDivElement>, 
   React.MouseEventHandler<HTMLDivElement> & React.TouchEventHandler<HTMLDivElement>, 
   React.MouseEventHandler<HTMLDivElement> & React.TouchEventHandler<HTMLDivElement>, 
   React.MouseEventHandler<HTMLDivElement>
]


export const useSlider: IUseSlider = ({maxIndex = 0, infinity = false, unitWidth, numberUnitsScreen = 1}) => {
   const [count, setCount] = useState<number>(0)
   const [transformTape, setTransformTape] = useState<number>(0)
   const [xStart, setXStart] = useState<number | null>(null)
   const [isMove, setIsMove] = useState<boolean>(false)  

   useEffect(() => {
      if(count < 0){
         setCount(0)
      }
      else if(count > maxIndex){
         setCount(maxIndex)
      }
   },[count])
   
   const incrimentCount = () => {
      if(count < maxIndex){
         setCount(count + 1)
      }
      else if (infinity) {
         setCount(0)
      }
      else{
         setTransformTape(count * (unitWidth * numberUnitsScreen))
      }
   }

   const decrementCount = () => {
      if(count > 0){
         setCount(count - 1)
      }
      else if (infinity) {
         setCount(maxIndex)
      }
   }
   
   const start = (e: React.TouchEvent<HTMLDivElement> & React.MouseEvent<HTMLDivElement>) => {
      if(e.type !== "touchstart"){
         e.preventDefault()
      } 
      const xStart = e.type === "touchstart" ? e.touches[0].clientX : e.clientX 
      setXStart(xStart)
      setIsMove(true)
      e.currentTarget.style.transition = "0s"
   }

   const move = (e: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement>) => {
      if(isMove){
         const xMove = e.type === "touchmove"? e.touches[0].clientX : e.clientX
         setTransformTape(-transformTape - xMove)
      }
   }

   const end = (e: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement>) => {
      const xEnd = e.type === "touchend"? e.changedTouches[0].clientX : e.clientX
      const differenceX = xStart ? xStart - xEnd : 0
      e.currentTarget.style.transition = "0.3s"
      setIsMove(false)
      if(Math.abs(differenceX) > 100){
         if(differenceX > 0){
            incrimentCount()
         }
         else if(differenceX < 0){
            decrementCount()
         }
      }
      else{
         setTransformTape(count * (unitWidth * numberUnitsScreen)) 
      }

   }

   const cancelTransform = (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.transition = "0.3s"
      setIsMove(false)
      setTransformTape(count * (unitWidth * numberUnitsScreen))
   }

   useEffect(() => {
      setTransformTape(count * (unitWidth * numberUnitsScreen))
   },[count])

   return [count, transformTape, incrimentCount, decrementCount, setCount, start, move, end, cancelTransform]
}