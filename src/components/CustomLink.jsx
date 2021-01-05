import React from 'react';
import { Link } from 'react-router-dom';

function CustomLink({title,path,size='',background='#AE5D68'}) {
    return( 
        <Link to={path} className={`customlink ${size}`} style={{background:background}}>
            <h1 className="title">{title}</h1>
        </Link>
    );
}
export default CustomLink;