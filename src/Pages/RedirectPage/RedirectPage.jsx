import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpinnerBike from '../../components/SpinnerBike';
import './RedirectPage.scss';

function RedirectPage({linkRef,match}) {

  const [link,setLink] = useState(null);
  const { linkID } = useParams();

  useEffect(async()=>{
    await linkRef.where('shortLink', '==', linkID).get().then((snapshot)=>{
      snapshot.docs.forEach(doc=>{
        setLink(`${window.location.origin}/l/${doc.data().link}`);
      })
    });

    console.log('redirecting to', link)

    await delay(5000);
    window.location.href = link


  },[linkID]);

  const delay = ms => new Promise(res=> setTimeout(res,ms));


  return (
    <div className="RedirectPage page">
      <SpinnerBike></SpinnerBike>
      <h1>Redirecting now</h1>
    </div>
  );
}

export default RedirectPage;
