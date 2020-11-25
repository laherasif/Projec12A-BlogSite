import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { graphql, Link } from 'gatsby'
import comintOne from './avator/comment-1.jpg';
import comintTwo from './avator/comment-2.jpg';
import comintThree from './avator/comment-3.jpg';
import 'fontawesome-4.7'
export default function Product({ pageContext, data }) {

  const { itemDetails } = pageContext

  let Arr = [];

  data.allContentfulBooks.nodes.filter(item => {
    if (item.id !== itemDetails.id) {
      return Arr.push(item)
    }
    return item
  })


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

      <div className="breadcrumb-option" style={{marginTop:'5rem'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/"><i className="fa fa-home" /> Home</Link>
                <a href="./blog.html">Blog</a>
                <span><strong>Being seen</strong>:{itemDetails.title}?</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="blog-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="blog__details__content">
                <div className="blog__details__item" >
                  <img src={`http:${itemDetails.image.file.url}`} alt="image" />
                  <div className="blog__details__item__title">
                    <span className="tip">Street style</span>
                    <h4>
                      {itemDetails.title}
                    </h4>
                    <ul>
                      <li>
                        by <span>{itemDetails.slug}</span>
                      </li>
                      <li>Seb 17, 2019</li>
                      <li>39 Comments</li>
                    </ul>
                  </div>
                </div>
                <div className="blog__details__desc">
                  <p>
                    {documentToReactComponents(itemDetails.desc.json)}
                  </p>
                  <p>
                    A few days later, Simone Rocha arguably upped the ante. The
                    32-year-old’s show – in part inspired by Louise Bourgeois, who
                    lived until she was 98 – featured models in their 30s and 40s,
                    including cult favourite Jeny Howorth and actor Chloë Sevigny.
            </p>
                </div>
                <div className="blog__details__quote">
                  <div className="icon">
                    <i className="fa fa-quote-left" />
                  </div>
                  <p>
                    Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
            </p>
                </div>
                <div className="blog__details__desc">
                  <p>
                    Occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate.
            </p>
                </div>
                <div className="blog__details__tags">
                  <a href="#">Fashion</a>
                  <a href="#">Street style</a>
                  <a href="#">Diversity</a>
                  <a href="#">Beauty</a>
                </div>
                <div className="blog__details__btns">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="blog__details__btn__item">
                        <h6>
                          <a href="#">
                            <i className="fa fa-angle-left" /> Previous posts
                    </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="blog__details__btn__item blog__details__btn__item--next">
                        <h6>
                          <a href="#">
                            Next posts <i className="fa fa-angle-right" />
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog__details__comment">
                  <h5>3 Comment</h5>
                  <a href="#" className="leave-btn">
                    Leave a comment
            </a>
                  <div className="blog__comment__item">
                    <div className="blog__comment__item__pic">
                      <img src={comintOne} alt="image" />
                    </div>
                    <div className="blog__comment__item__text">
                      <h6>Brandon Kelley</h6>
                      <p>
                        Duis voluptatum. Id vis consequat consetetur dissentiet,
                        ceteros commune perpetua mei et. Simul viderer facilisis
                        egimus tractatos splendi.
                </p>
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" /> Seb 17, 2019
                  </li>
                        <li>
                          <i className="fa fa-heart-o" /> 12
                  </li>
                        <li>
                          <i className="fa fa-share" /> 1
                  </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog__comment__item blog__comment__item--reply">
                    <div className="blog__comment__item__pic">
                      <img src={comintTwo} alt="image" />
                    </div>
                    <div className="blog__comment__item__text">
                      <h6>Brandon Kelley</h6>
                      <p>
                        Consequat consetetur dissentiet, ceteros commune perpetua mei
                        et. Simul viderer facilisis egimus ulla mcorper.
                </p>
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" /> Seb 17, 2019
                  </li>
                        <li>
                          <i className="fa fa-heart-o" /> 12
                  </li>
                        <li>
                          <i className="fa fa-share" /> 1
                  </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog__comment__item">
                    <div className="blog__comment__item__pic">
                      <img src={comintThree} alt="image" />
                    </div>
                    <div className="blog__comment__item__text">
                      <h6>Brandon Kelley</h6>
                      <p>
                        Duis voluptatum. Id vis consequat consetetur dissentiet,
                        ceteros commune perpetua mei et. Simul viderer facilisis
                        egimus tractatos splendi.
                </p>
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" /> Seb 17, 2019
                  </li>
                        <li>
                          <i className="fa fa-heart-o" /> 12
                  </li>
                        <li>
                          <i className="fa fa-share" /> 1
                  </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="blog__sidebar">
                <div className="blog__sidebar__item">
                  <div className="section-title">
                    <h4>Categories</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        All <span>(250)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Fashion week <span>(80)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Street style <span>(75)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lifestyle <span>(35)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Beauty <span>(60)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog__sidebar__item">
                  <div className="section-title">
                    <h4>Feature posts</h4>
                  </div>
                  {Arr.map((feture, index) => {
                    return (
                      <div className="feature" key={index}>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="blog__feature__item__pic">
                              <img src={feture.image.file.url} alt="image" />
                            </div>
                          </div>
                          <div className="col-sm-9">
                            <div className="blog__feature__item__text">
                              <h6><Link to={`/books/${feture.slug}`}>{feture.title}</Link></h6>
                              <span>Seb 17, 2019</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      // <a href="#" className="blog__feature__item" key={index}>
                      //   <div className="blog__feature__item__pic">
                      //     <img src={feture.image.file.url} alt="image"  />
                      //   </div>
                      //   <div className="blog__feature__item__text" style={{border:'1pt solid yellow'}}>
                      //   <h6><Link to={`/books/${feture.slug}`}>{feture.title}</Link></h6>
                      //     <span>Seb 17, 2019</span>
                      //   </div>
                      // </a>
                    )
                  })
                  }
                </div>
                <div className="blog__sidebar__item">
                  <div className="section-title">
                    <h4>Tags cloud</h4>
                  </div>
                  <div className="blog__sidebar__tags">
                    <a href="#">Fashion</a>
                    <a href="#">Street style</a>
                    <a href="#">Diversity</a>
                    <a href="#">Beauty</a>
                  </div>
                </div>
              </div>
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
      {/* Footer Section End */}
      {/* Search Begin */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
          </form>
        </div>
      </div>

    </div>
  )
}

export const NewPage = graphql`
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
