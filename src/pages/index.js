import React from "react"
import { Link } from 'gatsby'
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import 'fontawesome-4.7'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
export default function Home({ data }) {
  console.log("query", data)
  return (
  <div>
     <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Gatsby Blog Site </a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>

          </ul>
        </div> */}
      </nav>  

    <section className="blog spad">
  <div className="container">
    <div className="row">
    {data.allContentfulBooks.nodes.map((blog , index)=>{
      return(
        <div class="col-lg-4 col-md-4 col-sm-6" key={ index }>
        <div class="blog__item">
            <div class="blog__item__pic set-bg" 
            
            style={{backgroundImage:`url(http:${blog.image.file.url})`}}
            >

            </div>
            <div class="blog__item__text">
      <h6><Link to={`/books/${blog.slug}`}>{blog.title}</Link></h6>
                <ul>
      <li>by <span>{blog.slug}</span></li>
                    <li>Seb 17, 2019</li>
                </ul>
            </div>
        </div>
      
    </div>

    )
    })
  }
      
      
      <div className="col-lg-12 text-center">
        <a href="#" className="primary-btn load-btn">
          Load more posts
        </a>
      </div>
    </div>
  </div>
</section>

<footer className="footer" >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  {/* <a href="./index.html"><img src="img/logo.png" alt /></a> */}
                  <h2>Shopping Mart </h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              cilisis.</p>
                {/* <div className="footer__payment">
              <a href="#"><img src="img/payment/payment-1.png" alt /></a>
              <a href="#"><img src="img/payment/payment-2.png" alt /></a>
              <a href="#"><img src="img/payment/payment-3.png" alt /></a>
              <a href="#"><img src="img/payment/payment-4.png" alt /></a>
              <a href="#"><img src="img/payment/payment-5.png" alt /></a>
            </div> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Orders Tracking</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li><a href="#">Wishlist</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="site-btn">Subscribe</button>
                </form>
                <div className="footer__social">
                  <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-youtube-play" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
              <a href="#"><i className="fa fa-pinterest" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              <div className="footer__copyright__text">
                <p>Copyright ©  All rights reserved | This template is made in Gatsby</p>
              </div>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </div>
          </div>
        </div>
      </footer>

  </div>
  )
}


export const PageQuery = graphql`
query{
   allContentfulBooks {
  nodes {
    slug
    title
    id
    desc {
      json
    }
    image {
      description
      file {
        url
      }
    }
}

}
}

`
