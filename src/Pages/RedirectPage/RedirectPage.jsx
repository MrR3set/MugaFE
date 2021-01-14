import React, { useEffect } from 'react';
import SpinnerBike from '../../components/SpinnerBike';
import './RedirectPage.scss';

function RedirectPage({match}) {

  useEffect(()=>{
    console.log('redirecting to ', match.params.linkID);
    // Add content to redirect him to the page
    
  },[match.params.linkID])


  return (
    <div className="RedirectPage page">
      <SpinnerBike></SpinnerBike>
      <h1>Redirecting now</h1>
    </div>
  );
}

export default RedirectPage;
