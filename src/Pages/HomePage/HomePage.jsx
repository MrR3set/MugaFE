import React from 'react';
import './HomePage.scss';
import CustomLink from '../../components/CustomLink'

function HomePage() {
  return (
    <div className="HomePage page">
 
        <div className='input'>
            <input type='text'></input>
        </div>

        <div className="links">
            <CustomLink path='mylinks' title='My Links' background='#F54925'></CustomLink>
            <CustomLink path='profile' title='Profile' size='tall'></CustomLink>
            <CustomLink path='signout' title='Sign out' background='#660F56'></CustomLink>
            <CustomLink path='moreinfo' title='More info' size='wide' background='#D1193E'></CustomLink>
        </div>


    </div>
  );
}

export default HomePage;
