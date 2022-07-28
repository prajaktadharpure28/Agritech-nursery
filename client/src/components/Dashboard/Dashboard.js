import React from 'react';
// import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import './Dashboard.css';
import image from "./img/agri1.png";
import img from "./img/agri2.jpeg";
import plant from "./img/plants.PNG";
import plantser from "./img/plantser.PNG";
import plantcare from "./img/plantcare.PNG";
import seeds from "./img/seeds.PNG";
import betelleaf1 from "./img/betelleaf1.jpg"
// import {StyleSheet} from "react"
function Dashboard() {
  return (
    <div className='main'>  
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">AgriTech</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Offers</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Plants
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="./Addplant">Addplant</a></li>
              <li><a className="dropdown-item" href="./getdata">Showplant</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Planters
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Plastic Pots</a></li>
              <li><a className="dropdown-item" href="#">Seedling Tray</a></li>
              <li><a className="dropdown-item" href="#">Grow Bags for Plants</a></li>
            </ul>
          </li>
        </ul>
        
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        
        {/* </form> */}
      </div>
    </div>
    
  </nav>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div><br></br>
<div>
<h1 className="content">We are here to inspire a world where every plant journey is a personal revolution of inner change and growth</h1>
</div>
<br></br>
<div className="text-center" id='plants1'>
<Link to="./Addplant">
<img src={plant} className="img-thumbnail" alt="..."></img>
</Link>
<Link to="./Addplant">
<img src={plantser} className="img-thumbnail" alt="..."></img>
</Link>
<Link to="./Addplant">
<img src={plantcare} className="img-thumbnail" alt="..."></img>
</Link>
{/* <Link to="./Addplant">
<img src={seeds} className="img-thumbnail" alt="..."></img>
</Link> */}
</div>
<br></br>

{/* <h1 className="text-center">Customer Favourites</h1>
<br></br>
<div className='text-center'id='fav'>
<img src={betelleaf1} class="rounded" alt="..."></img>
</div>
<br></br> */}

{/* <h1 className="text-center">Betel Leaf Plant (Magai Paan)</h1>
<h3 className='text-center'>Piper betle</h3>
<div class="card text-center">
  <div class="card-body">
    <h5 class="card-title">About the Betel Leaf Plant (Magai Paan)</h5>
    <p class="card-text">The Betel Leaf, or Magai Paan is a creeper with glossy heart-shaped leaves that are popularly consumed in India. It is fairly easy to grow even for new plant parents with a little care. Let it climb or trail and it will be a great addition to both your collection and food habit as it is known to cool the body and provides many nutrients.</p>
    <div className="ad-btn">
                <a href="#" className="button">Read More →</a>
            </div>
  </div>

  <br></br> */}


  <h1 className="text-center">Continue shopping for</h1><br></br>
  <div className="index-post">
        <div className="card-container">
        
            <div className="image-container">
                <img src={betelleaf1} alt=""/>
            </div>
            
            <div className="meta-container">
           
                <h2 className="title">Betel Leaf Plant (Magai Paan)</h2>
                <span className="desc">he Betel Leaf, or Magai Paan is a creeper with glossy heart-shaped leaves that are popularly consumed in India.</span>
            </div>
            <div className="button-container mt-5 mb-3">
                <a href="#" className="button">Add To Cart</a>
            </div>
            <div className='text-center'><s>₹499</s><b> ₹399(20% OFF)</b> </div>
        </div>

        <div className="card-container">
        
        <div className="image-container">
            <img src={betelleaf1} alt=""/>
        </div>
        
        <div className="meta-container">
       
            <h2 className="title">Betel Leaf Plant (Magai Paan)</h2>
            <span className="desc">he Betel Leaf, or Magai Paan is a creeper with glossy heart-shaped leaves that are popularly consumed in India.</span>
        </div>
        <div className="button-container mt-5 mb-3">
            <a href="#" className="button">Add To Cart</a>
        </div>
        <div className='text-center'><s>₹499</s><b> ₹399(20% OFF)</b> </div>
    </div>

    
        </div>
        
       


        {/* <div className="container">
            <div className="image-container">
                <img src={betelleaf1} alt=""/>
            </div>
            <div className="meta-container">
                <h2 className="title">Betel Leaf Plant (Magai Paan)</h2>
                <span className="desc">he Betel Leaf, or Magai Paan is a creeper with glossy heart-shaped leaves that are popularly consumed in India.</span>
            </div>
            <div className="button-container mt-5 mb-3">
                <a href="#" className="button">Add To Cart</a>
            </div>
            <div className='text-center'><s>₹499</s><b> ₹399(20% OFF)</b> </div>
        </div>
        <div className="container">
            <div className="image-container">
                <img src={betelleaf1} alt=""/>
            </div>
            <div className="meta-container">
                <h2 className="title">Betel Leaf Plant (Magai Paan)</h2>
                <span className="desc">he Betel Leaf, or Magai Paan is a creeper with glossy heart-shaped leaves that are popularly consumed in India.</span>
            </div>
            <div className="button-container mt-5 mb-3">
                <a href="#" className="button">Add To Cart</a>
            </div>
            <div className='text-center'><s>₹499</s><b> ₹399(20% OFF)</b> </div>
        </div>
<div>
        <div className="container">
            <div className="image-container">
                <img src={betelleaf1} alt=""/>
            </div>
            <div className="meta-container">
                <h2 className="title">Betel Leaf Plant (Magai Paan)</h2>
                <span className="desc">he Betel Leaf, or Magai Paan is a creeper with glossy heart-shaped leaves that are popularly consumed in India.</span>
            </div>
            <div className="button-container mt-5 mb-3">
                <a href="#" className="button">Add To Cart</a>
                
            <div className='text-center'><s>₹499</s><b> ₹399(20% OFF)</b> </div>
            </div> 
        </div> */}

        {/* <div className="container">
            <div className="image-container">
                <img src={betelleaf1} alt=""/>
            </div>
            <div className="meta-container">
                <h2 className="title">Betel Leaf Plant (Magai Paan)</h2>
                <span className="desc">he Betel Leaf, or Magai Paan is a creeper with glossy heart-shaped leaves that are popularly consumed in India.</span>
            </div>
            <div className="button-container mt-5 mb-3">
                <a href="#" className="button">Add To Cart</a>
            
            <div className='text-center'><s>₹499</s><b> ₹399(20% OFF)</b> </div>
           </div>
        </div> */}

<footer>
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {/* <img src={Logo3} className="footer-logo" alt=''/> */}
                    </div>
                    <div className="col-md-3">
                        <h4>Features</h4>
                        <p>Deals & Offers</p>
                        <p>Customer Reviews</p>
                        <p>Customer Policy</p>
                    </div>
                    <div className="col-md-3">
                     <h4>Quick Contact</h4>
                     <p> <i className="fa fa-phone-square"></i>+91 8765435677</p>
                     <p> <i className="fa fa-envelope"></i>praju@gmail.com</p>
                     <p> <i className="fa fa-home"></i>NAGPUR, MAHARASHTRA ,INDIA</p>
                    </div>
                    <div className="col-md-3">
                     <h4>Follow Us On</h4>
                     <p> <i className="fa fa-facebook-official"></i>Facebook</p>
                     <p> <i className="fa fa-youtube-play"></i>youtube</p>
                     <p> <i className="fa fa-twitter"></i>Twitter</p>
                    </div>
                </div> <hr/>
                <p className="copyright"> <i className="fa fa-heart"></i></p>
                
            </div>
        </section>
        </footer>
        </div>
  )
}

export default Dashboard;
