import iGame from '../assets/images/IGAME-logo.svg';
// import lineFooter from '../assets/images/Line-footer.svg';
// import { Link } from 'react-router-dom';

import {
	FaInstagram,
	FaFacebookF,
	FaGithub,
	FaTelegramPlane,
} from 'react-icons/fa';

function Footer() {
	return (
		<>
			<footer>
				<div className='container-base'>
					<div className='footer'>
						<div className='footer-left'>
							<div className='footer-left-logo'>
								<img src={iGame} alt='' />
							</div>
							<div className='footer-left-description'>
								<p>
									Each person has his own way of life, but his taste is
									different. There is no such thing as laughter, that layer of
									the bow. Until the end of the weekend.
								</p>
							</div>
							<div className='all-right-reserved'>
								<p>© 2024 IGAME. All rights reserved.</p>
							</div>
						</div>
						<div className='footer-right'>
							<nav>
								<ul>
									<li>Company</li>
									<li>
										<a href='#'>Our Partners</a>
									</li>
									<li>
										<a href='#'>Help Agreement</a>
									</li>
									<li>
										<a href='#'>FAQs</a>
									</li>
									<li>
										<a href='#'>Privacy & Conditions</a>
									</li>
								</ul>
								<ul>
									<li>Use Cases</li>
									<li>
										<a href='#'>About</a>
									</li>
									<li>
										<a href='#'>Tournaments</a>
									</li>
									<li>
										<a href='#'>Leaderboard</a>
									</li>
									<li>
										<a href='#'>Contact us</a>
									</li>
								</ul>
								<div className='social-icons'>
									<p>Follow us</p>
									<ul>
										<li>
											<a href='#'>
												<FaInstagram />
											</a>
										</li>
										<li>
											<a href='#'>
												<FaFacebookF />
											</a>
										</li>
										<li>
											<a href='#'>
												<FaGithub />
											</a>
										</li>
										<li>
											<a href='#'>
												<FaTelegramPlane />
											</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
