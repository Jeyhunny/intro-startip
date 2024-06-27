import '../assets/styles/layout/joinClub.scss';

function JoinClub() {
	return (
		<div id='join-club'>
			<div className='container-base'>
				<div className='join-club'>
					<div className='join-club-left'>
						<h3>JOIN THE CLUB</h3>
						<p>
							Sign up to our newsletter so you never miss out on product drops,
							news and exclusive offers.
						</p>
					</div>
					<div className='join-club-right'>
						<form>
							<input type='email' placeholder='Your email address' />
							<button>Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JoinClub;
