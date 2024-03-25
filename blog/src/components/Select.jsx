import React, { useId } from 'react'
/* here we are creating a compnent for selct function 
this bring option inside it we pass things required for selection parementers  */
function Select({
    options,
    label,
    className  = '',
    ...props
}, ref) {
const id = useId()
/* here we are returning from ui that if any selct button is used  */
  return (
    <div  className='w-full'>
        {label && <label htmlFor={id}
         className=''>
            </label>}
        <select
        {...props}
        id={id}
        ref={ref}       
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
           {options?.map((sex)=>(
            <option key={sex} value={sex}>
            {sex}
        </option>
           ))} 
        </select>    
    </div>
  )
}

export default React.forwardRef(Select)