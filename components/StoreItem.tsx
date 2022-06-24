import React,{FC, useState} from "react";
import Image from 'next/image'
import {motion} from 'framer-motion'
import {formatCurrency} from '../utils/formatCurrenct'

interface Props{
  id:number
  name:string
  price:number
  imgUrl:string

}


const StoreItem: FC<Props> = ({id,name,price,imgUrl}) => {
const [num,setNum] = useState<number>(0)

  let isZero = num === 0 

return(
    <section
     className="
    
      bg-zinc-100
      border-2 border-zinc-800
     shadow-[5px_5px_0_rgba(0,0,0,1)]
      flex flex-row lg:flex-col
       lg:w-fit w-[80vmin] "
      >
      <div
       className="w-1/2 lg:w-[30vmin] h-auto">
        <Image layout="responsive" 
                objectFit="cover"
                src={imgUrl} 
                height={300} width={250} alt={name} />
      </div>
     
    <div
     className="
        lg:border-t-2  
        lg:border-l-0
        border-l-2
        lg:gap-10
        border-zinc-800
        flex flex-col items-center justify-between
        grow">

        <div 
         className="
            capitalize
            md:text-lg
            p-3
            border-b-2 border-zinc-800
          flex w-full justify-between items-center ">
          <h3>{name}</h3>
         <h3 className="font-semibold" ><span className="text-base">$</span>{price}</h3>
        </div>


       <div 
         className="w-full"
         >
        
          <motion.button 
            key={isZero.toString()}
            initial={{height:0}}
            animate={{height:'fit-content'}} 
           className={`
            bg-cyan-700
            text-zinc-200
            flex items-center
            outline-zinc-900 outline outline-2
            capitalize w-full `}
            >
            {num<1?
              
            <h3 
              className="p-3 w-full "
              onClick={()=>setNum(num+1)}
               >add to cart</h3>
            :
              <div
                className="flex w-full  justify-between text-2xl relative"
                >
               <h5
                  className="
                  w-3/12
                  border-r-2 border-zinc-900 h-full p-2"
              onClick={()=>setNum(num-1)}
                 >-</h5>
                  <h1 
                    className="grow p-2"
                   > 
                   {num} 
                    </h1>
                <h5
                  className="
                  w-3/12
                  p-2 border-l-2 border-zinc-900"
                onClick={()=>setNum(num+1)}
                 >+</h5>
                 

               <div 
                  onClick={()=>setNum(0)}
                  style={{transformOrigin:'left'}}
                 className={`
                  transform-cpu
                  ${isZero? 'scale-x-0' :'scale-x-100'}
                  grid place-content-center
                  h-full
                  text-xs
                  font-mono
                  transition-all ease duration-200
                  shadow-[1px_1px_0_black]
                  hover:shadow-[3px_3px_0_black]
                  w-fit 
                  px-2 bg-red-600
                  absolute -right-7 `}
                 >
                  <span>X</span>
                </div>     

              </div>}
          </motion.button>

        </div>     


      </div>

    </section>






  )

}


export default StoreItem
