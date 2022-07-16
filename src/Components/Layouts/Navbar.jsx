import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
const Navbar = () => {
  return (
    <>
        <header className="header-default">
		<nav className="navbar navbar-expand-lg">
			<div className="container-xl">
			
				<div className="navbar-brand"><Link to="/"></Link><img src="assests/images/logo.svg" alt="logo" /></div> 

				<div className="collapse navbar-collapse">
					
					<ul className="navbar-nav mr-auto">
						<li className="nav-item dropdown active">
							<div className="nav-link dropdown-toggle"> <Link to="/"> Home</Link>  </div>
							<ul className="dropdown-menu">
								<li><div  className="dropdown-item"><Link to="/">Magazine</Link></div></li>
								<li><div className="dropdown-item"><Link to="/personal">Personal</Link></div></li>
								<li><div className="dropdown-item"><Link to="/personalalt">Personal Alt</Link></div></li>
								<li><div className="dropdown-item"><Link to="/minimal">Minimal</Link></div></li>
								<li><div className="dropdown-item"><Link to="/classes">Classic</Link></div></li>
							</ul>
						</li>
						<li className="nav-item">
							<div className="nav-link"><Link  to="/category">Lifestyle</Link></div>
						</li>
						<li className="nav-item">
							<div className="nav-link" ><Link to="/category">Inspiration</Link></div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#profile">Pages</a>
							<ul className="dropdown-menu">
								<div><div className="dropdown-item" ><Link to="/category">Category</Link></div></div>
								<div><div className="dropdown-item" ><Link to="/blogsingle">Blog Single</Link></div></div>
								<div><div className="dropdown-item" ><Link to="/blog-single-alt">Blog Single Alt</Link></div></div>
								<div><div className="dropdown-item" ><Link to="/about">About</Link></div></div>
								<div><div className="dropdown-item" ><Link to="/contact">Contact</Link></div></div>
							</ul>
						</li>
						<li className="nav-item">
							<div className="nav-link" ><Link to="/contact">Contact</Link></div>
						</li>
					</ul>
				</div>

				
				<div className="header-right">
					
					<ul className="social-icons list-unstyled list-inline mb-0">
						<li className="list-inline-item"><div href="#profile"><i className="fab fa-facebook-f"></i></div></li>
						<li className="list-inline-item"><div href="#profile"><i className="fab fa-twitter"></i></div></li>
						<li className="list-inline-item"><div href="#profile"><i className="fab fa-instagram"></i></div></li>
						<li className="list-inline-item"><div href="#profile"><i className="fab fa-pinterest"></i></div></li>
						<li className="list-inline-item"><div href="#profile"><i className="fab fa-medium"></i></div></li>
						<li className="list-inline-item"><div href="#profile"><i className="fab fa-youtube"></i></div></li>
					</ul>
					
					<div className="header-buttons">
						<button className="search icon-button">
							<i className="icon-magnifier"></i>
						</button>
						<button className="burger-menu icon-button">
							<span className="burger-icon"></span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
    </>
  )
}

export default Navbar