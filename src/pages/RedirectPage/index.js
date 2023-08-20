import React, { useEffect } from 'react'

const RedirectPage = () => {
    useEffect(()=>{
        sessionStorage.clear(); 
        window.location.href = "/start"
      },[])
  return (
    <div></div>
  )
}

export default RedirectPage