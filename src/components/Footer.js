import React from "react";
import { Link } from "react-router-dom";

import { Button } from "./Button";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Join the Aventure newsletter to receive our best vacation deals
				</p>
				<p className="footer-subscription-text">
					You can ubsubscribe at any time.
				</p>
				<div className="input-areas">
					<form action="">
						<input
							type="email"
							className="footer-input"
							name="email"
							placeholder="Your Email"
						/>
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-links-wrapper">
					<div className="footer-links-item">
						<h2>Videos</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Term of Service</Link>
					</div>
					<div className="footer-links-item">
						<h2>Social Media</h2>
						<Link to="/">Instagram</Link>
						<Link to="/">Facebook</Link>
						<Link to="/">Youtube</Link>
						<Link to="/">Twitter</Link>
					</div>
				</div>
				<div className="footer-links-wrapper">
					<div className="footer-links-item">
						<h2>About Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Term of Service</Link>
					</div>
					<div className="footer-links-item">
						<h2>Contact Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Term of Service</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							TRVL <i className="fab fa-typo3" />
						</Link>
					</div>
					<small className="website-rights">TRVL © 2020</small>
					<div className="social-icons">
						<Link
							className="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-fabook"></i>
						</Link>
						<Link
							className="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-fabook"></i>
						</Link>
						<Link
							className="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-fabook"></i>
						</Link>
						<Link
							className="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-fabook"></i>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
