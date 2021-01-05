import React from 'react';
import './HomePage.scss';
import CustomLink from '../../components/CustomLink'

function HomePage() {
  return (
    <div className="HomePage">
 
        <div className='input'>
            <input type='text'></input>
        </div>

        <div className="links">
            <CustomLink path='mylinks' title='mylinks'></CustomLink>
            <CustomLink path='profile' title='profile'></CustomLink>
            <CustomLink path='signout' title='sign out'></CustomLink>
            <CustomLink path='moreinfo' title='more info'></CustomLink>
        </div>


    </div>
  );
}

export default HomePage;
