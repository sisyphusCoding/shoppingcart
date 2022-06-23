import Link from "next/link";
import React,{FC} from "react";
import{useRouter} from 'next/router'




const Navbar:FC = () => {
  const router =useRouter()
  
  console.log(router.asPath)

 const navLink:string[] = ['/','store','about']

 const navString:string[] = ['/','/store','/about']

  return(
      <section
        className="
        overflow-hidden
        shadow-xl
        px-4
        bg-zinc-100
        rounded-xl
        items-center justify-between
        flex min-w-full 
        "
        >
      <nav
       className=" 
          rounded-xl
          flex items-center justify-center gap-2 "
        >
        {navLink.map((item,index)=>(
              
        <Link
            key={item}
            href={index ===0? item: `/${item}`}>
            <a 
            className={`
            ${router.pathname === navString[index]? 
            'font-bold bg-zinc-300 rounded-xl text-zinc-500 py-2 focus:no-underline'
            :'no-underline'}
            py-7 px-4
            lg:text-lg 
            hover:text-black focus:underline 
            outline-none underline-offset-8 decoration-fuchsia-800
            capitalize transition-all ease-out duration-500 -tracking-wider`}
             ><h4 
                >{index === 0? 'home' : item}</h4></a>
        </Link>
        ))}
      </nav>
      </section>
  )
}


export default Navbar
