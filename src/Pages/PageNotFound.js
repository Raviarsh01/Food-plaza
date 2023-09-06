import React from 'react'

const PageNotFound = () => {
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
        <p>Back to previous page </p>
    </div>
  )
}

export default PageNotFound