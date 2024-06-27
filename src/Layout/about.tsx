import wallet from '../assets/images/icons/wallet-svg.svg';

function About() {
	return (
		<>
			<section className='about-community-game'>
				<div className='container-base'>
					<div className='about-community'>
						<div className='what-community'>
							<h3 className='community-heading'>What is Community Gaming</h3>
							<p>
								Community Gaming’s platform creates a seamless experience for
								tournament organizers to host grassroots tournaments and for
								gamers to compete and instantly get paid when they win. The
								platform facilitates automatic payments that are fast,
								transparent, and require no blockchain knowledge to use!
							</p>
						</div>
						<div className='answers-about-community'>
							<div className='answers-div'>
								<div>
									<div className='circle'>
										<img src={wallet} alt='' />
									</div>
								</div>
								<div>
									<h4>Easy Onboarding</h4>
									<p>
										Account creation is fast and simple! Just confirm your email
										address to get your account wallet set up (or connect your
										own).
									</p>
								</div>
							</div>
							<div className='answers-div'>
								<div>
									<div className='circle'>
										<img src={wallet} alt='' />
									</div>
								</div>
								<div>
									<h4>Match Reporting</h4>
									<p>
										Use the self reporting bracket feature to keep your
										tournament moving! For API-supported games, match results
										will automatically be entered into the bracket.
									</p>
								</div>
							</div>
							<div className='answers-div'>
								<div>
									<div className='circle'>
										<img src={wallet} alt='' />
									</div>
								</div>
								<div>
									<h4>Instant Payments</h4>
									<p>
										Take advantage of our automated payment technology to have
										your players paid out instantly and transparently. No more
										wait times or high fees!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
