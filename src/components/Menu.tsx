import React from 'react'


type menuProps = {
    children: React.ReactNode | undefined;
}
function Menu({children}:menuProps) {

  
    
  // {/* TODO: calculate where to stay within the page boundaries!!  */}
  return (
    // <div className=' relative'>
        <div className=' w-fit absolute bg-white rounded-lg shadow-lg top-[3rem] right-0 z-30'>
            {children}
        </div>
    // {/* </div> */}
  )
}

export default Menu