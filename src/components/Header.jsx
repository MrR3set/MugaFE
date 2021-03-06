
import React from 'react'

function Header({children,className}) {
    return (
    <div className={`header ${className}`}>
        {children}
    </div>
    );
}

export default Header;