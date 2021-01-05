import react from 'react';

export default function Header({children,className}) {
    return (
    <div className={`header ${className}`}>
        {children}
    </div>
    );
}