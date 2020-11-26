import React from "react"
import { Link , graphql } from 'gatsby'
import 'fontawesome-4.7'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
export default function Home({ data }) {
  return (
  <div>
     <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Gatsby Blog Site </Link>
       
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
        <Link to="/" className="primary-btn load-btn">
          Load more posts
        </Link>
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
                  <h2>Shopping Mart </h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              cilisis.</p>
                
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Blogs</Link></li>
                  <li><Link to="/">Contact</Link></li>
                  <li><Link to="/">FAQ</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li><Link to="/">My Account</Link></li>
                  <li><Link to="/">Orders Tracking</Link></li>
                  <li><Link to="/">Checkout</Link></li>
                  <li><Link to="/">Wishlist</Link></li>
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
                  <Link to="/"><i className="fa fa-facebook" /></Link>
              <Link to="/"><i className="fa fa-twitter" /></Link>
              <Link to="/"><i className="fa fa-youtube-play" /></Link>
              <Link to="/"><i className="fa fa-instagram" /></Link>
              <Link to="/"><i className="fa fa-pinterest" /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright__text">
                <p>Copyright ©  All rights reserved | This template is made in Gatsby</p>
              </div>
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
