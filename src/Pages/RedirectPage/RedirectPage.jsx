import React, { useEffect } from 'react';
import './RedirectPage.scss';

function RedirectPage({match}) {

  useEffect(()=>{
    console.log('redirecting to ', match.params.linkID);
    // Add content to redirect him to the page
  },[match.params.linkID])


  return (
    <div className="RedirectPage page">
      REDIRECTING
    </div>
  );
}

export default RedirectPage;
