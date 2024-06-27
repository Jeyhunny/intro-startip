import { useEffect, useState } from 'react';
import logo from '../assets/images/IGAME-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
	const [small, setSmall] = useState(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => setSmall(window.scrollY));
		}
	}, []);
	return (
		<header style={small > 150 ? { backgroundColor: '#111111' } : {}}>
			<div className='container-base'>
				<div className='header'>
					<div className='logo-iGame'>
						<Link to='/'>
							<img src={logo} alt='' />
						</Link>
					</div>
					<div>
						<nav>
							<ul>
								<li>
									<Link to='/tournament'>Tournaments</Link>
								</li>
								<li>
									<a href='#'>Leaderboard</a>
								</li>
								<li>
									<a href='#'>News</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className='header-buttons'>
						<Link to='/signin' className='signin-button'>
							Sign In
						</Link>
						<Link to='/signup' className='signup-button'>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
