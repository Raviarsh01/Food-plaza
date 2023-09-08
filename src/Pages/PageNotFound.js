import React from 'react'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
    const notFound ={
        width:'800px',
        margin:'40px auto',
        border:'1px solid #333',
        padding:'90px',
        textAlign:'center',
    }
  return (
    <div style={notFound}>
        <h2>Oops..!</h2>
        <h3 style={{marginTop:'20px'}}>Page not found</h3>
        <p style={{textDecoration:'underline',cursor:'pointer'}} onClick={()=>navigate(-1)}>Back to previous page </p>
    </div>
  )
}

export default PageNotFound