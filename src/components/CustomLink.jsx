import React from 'react';
import { Link } from 'react-router-dom';

function CustomLink({title,path,size='',info}) {
    return( 
        <Link to={path} className={`option wrapper link ${size}`}>
            <h1 className="title">{title}</h1>
        </Link>
    );
}
export default CustomLink;