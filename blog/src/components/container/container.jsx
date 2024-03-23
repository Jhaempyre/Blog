import React from "react";

// This component acts as a wrapper to provide styling and structure to its children components.
// It utilizes the `children` prop, a special prop in React that represents any components or elements nested inside this component.
// By wrapping its children inside a div with specific styling classes, it ensures consistent layout and appearance across different parts of the application.
// This component can be used to encapsulate sections of the UI and maintain a clean and organized structure.
function Container({ children }) {
    return (
        <div className='w-full max-w-7xl mx-auto px-4'>
            {children}
        </div>
    );
}

export default Container;
