import React, { useState } from 'react';
import './HomePage.scss';
import CustomLink from '../../components/CustomLink'

function HomePage() {

  const [link,setLink] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('sending', link);
    // Code to write new entry in db. Also dont forget to make the conversion here
  }
  const handleChange = (event) => {
    event.preventDefault();
    setLink(event.target.value);
  }

  return (
    <div className="HomePage page">
 
        <form className='input' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange}/>
            <button>Shrink</button>
        </form>

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
