import React, { useState } from 'react';
import './HomePage.scss';
import CustomLink from '../../components/CustomLink';
import firebase from 'firebase/app';
import shortid from 'shortid';
import Copy from '../../components/Copy';



function HomePage({linkRef}) {
  
  const [link,setLink] = useState('');
  const [shortLink,setShortLink] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const id = shortid.generate();
    // Write link
    await linkRef.add({
      link:link,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      shortLink:id
    });
    // Read link
    await linkRef.where('shortLink', '==', id).get().then((snapshot)=>{
      setShortLink(`${window.location.origin}/l/${snapshot.docs[0].data().shortLink}`);
    });
    setShortLink(`${window.location.origin}/l/${id}`);
  }


  const handleChange = (event) => {
    event.preventDefault();
    setLink(event.target.value);
  }

  const copyLink = () =>{
    const el = document.createElement('textarea');
    el.value = shortLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  return (
    <div className="HomePage page">
 
        <div className="content">
          <div className="shortLink" onClick={copyLink}>
            {shortLink?<h1 className='link'>{shortLink}</h1>:<h1 className='title'>Make URLs Great Again</h1>}
            {shortLink?<Copy/>:null}
          </div>

      
          <form className='input' onSubmit={handleSubmit}>
              <input type='text' onChange={handleChange}/>
              <button>Shrink</button>
          </form>
        </div>

        <div className="links">
            <CustomLink path='mylinks' title='My Links' background='#F54925'></CustomLink>
            <CustomLink path='profile' title='Profile' size='tall'></CustomLink>
            <CustomLink path='moreinfo' title='More info' background='#D1193E'></CustomLink>
            <CustomLink path='signout' title='Sign out' size="wide" background='#660F56'></CustomLink>
        </div>


    </div>
  );
}

export default HomePage;
