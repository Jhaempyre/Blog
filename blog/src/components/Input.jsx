import React  , {useId} from 'react'

/**
 * The Input component is a reusable and accessible input field that can be used in various forms across the application.
 * It is built using the React.forwardRef function to enable forwarding of the ref prop to the underlying HTML input element.
 * This component accepts the following props:
 * 1. label: A string that represents the text label for the input field.
 * 2. name: A string that is used to uniquely identify the input field.
 * 3. type: A string that specifies the input field type (default: 'text').
 * 4. className: A string that accepts a custom class name to apply custom styles to the input field.
 * 5. ref: A React reference that gets forwarded to the underlying HTML input element.
 * 6. All other props are spread onto the input element.
 *
 * The Input component generates a unique ID using the `useId` hook from React to ensure the input field has a unique ID for accessibility purposes.
 * The label uses the HTMLFor attribute to associate the label with the input field, and the input field has the generated unique ID assigned to its ID attribute.
 */

const Input = React.forwardRef(function(
    {
        label,
        name,
        type="text",
        className = "" ,
        ...props
    },ref) 
{
    const id = useId()
    return (
        <div className='w-full'>{
        label && <label  
        className='inline-block mb-1 pl-1' 
         htmlFor={id}>
            {label}
        </label>
        }
 {/* learning i was rendering <Input /> that made it fall 
  * into infinite loop and of recursively calling the same element
   the condition of stack overflow increased which potentialy made page unreachable    */}      
        <input
        type = {type}
        className = {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50
         duration-200 border
        border-gray-200 w-full  ${className} `}
        ref={ref}
        {...props}
        id = {id}/>
        </div>
    )
})

export default Input