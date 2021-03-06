import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SpinnerBike from '../../components/SpinnerBike';
import './RedirectPage.scss';

function RedirectPage({linkRef,}) {

  const { linkID } = useParams();

  useEffect(()=>{

    const getURL = async() => {
      let nlink = ''
      await linkRef.where('shortLink', '==', linkID).get().then(async(snapshot)=>{
        if(!snapshot.empty)
          nlink = snapshot.docs[0].data().link
        else{
          await delay(1000);
          window.location.href = window.location.origin + '/404'
        }
      });
      await delay(5000);
      window.location.href = nlink
    }
    getURL()
  },[linkID,linkRef]);

  const delay = ms => new Promise(res=> setTimeout(res,ms));


  return (
    <div className="RedirectPage page">
      <SpinnerBike></SpinnerBike>
      <h1>Redirecting now</h1>
    </div>
  );
}

export default RedirectPage;
