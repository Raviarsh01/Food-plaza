import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
const About = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <section className="home-section">
          <div>
            <img src="Images\home-1.jpg"></img>
          </div>
          <div>
            <p className="info-para">
              Welcome To<span> Fresh Box Restaurant</span>{" "}
            </p>
            <p className="center">Little Story</p>
            <p className="center">
              Lorem placeat a soluta nemo debitis repellat possimus minima
              nulla, sunt quaerat quibusdam! Quos ipsa quam dignissimos, quaerat
              expedita fugiat doloribus itaque, sit molestiae a distinctio modi?
              Officiis iure eligendi porro qui praesentium recusandae, nisi
              minima voluptatem voluptatibus fuga expedita totam quas alias
              quidem reprehenderit laudantium nihil quam. Maxime corporis
              provident asperiores molestias accusantium tempora. Aliquam ea
              esse ad a enim tempora rerum laboriosam quae eligendi!
            </p>
            
            <p className="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              soluta harum consequuntur nam sed impedit dolore corrupti iste
              incidunt eius perspiciatis deserunt nemo vitae qui illo numquam,
              corporis excepturi voluptatum.
            </p>
            <div style={{width:'100%',textAlign:'right',paddingTop:'5px'}}>
              <Link to="/about" className="read-more" >Read more...</Link>
            </div>
          </div>
        </section>
  )
}

export default About