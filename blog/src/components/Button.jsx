import React from "react";
//creating a componenet as button will help us to reuse the code more 
//often than rewriting again and again 

// A functional component for rendering a customizable button
// 
// Parameters:
//   - children: JSX.Element: The content to be displayed on the button
//   - type: string, optional: The HTML button type. Default is "button"
//   - bgColor: string, optional: The background color class for the button. Default is "bg-blue-600"
//   - textColor: string, optional: The text color class for the button. Default is "text-white"
//   - className: string, optional: Additional custom classes for the button
//   - props: object: Any additional HTML attributes to be added to the button

function Button(
    {
        children,
        type = "button",
        bgColor = "bg-blue-600",
        textColor = "text-white",
        className = "",
        ...props
    }
){
{
 /* learning i was rendering <Button /> that made it fall 
  * into infinite loop and of recursively calling the same element
   the condition of stack overflow increased which potentialy made page unreachable    */} 
return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}
    >
        {children}
        
    </button>
)
}
export default Button