import '../assets/styles/layout/upcoming.scss';
import codImage from '../assets/images/cod-image.svg';
import codMiniImage from '../assets/images/call-of-duty-warzone-game.svg';
import trophy from '../assets/images/trophy.svg';
import gruopIcon from '../assets/images/gruop-icon.svg';
import { IoMdArrowRoundForward } from 'react-icons/io';

function Upcoming() {
	return (
		<section id='upcoming'>
			<div className='container-base'>
				<div className='upcoming-tournaments'>
					<div className='upcoming-nav'>
						<h3 className='upcoming-heading'>Upcoming Tournaments</h3>
						<p className='upcoming-viewall'>
							<a href='#'>View All</a>
						</p>
					</div>
					<div className='up-tournaments'>
						<div className='up-tournament-info'>
							<div className='up-tournament-image'>
								<img className='upcoming-cover-image' src={codImage} alt='' />
								<span>
									<img src={codMiniImage} className='cod-mini-image' alt='' />
									Call of Duty
								</span>
							</div>
							<div className='upcoming-desc'>
								<p className='upcoming-desc-date'>21 Feb-6 March, 08:00 PM</p>
								<h4 className='upcoming-desc-name'>Call Of Duty Mobile</h4>
								<p className='upcoming-desc-about'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor...
								</p>
							</div>
							<div className='upcoming-details'>
								<div>
									<p>Win Price</p>
									<div className='tour-price'>
										<img src={trophy} alt='' />
										<p>₹55.4k</p>
									</div>
								</div>
								<div>
									<p>Player Slot</p>
									<div className='tour-price'>
										<img src={gruopIcon} alt='' />
										<p>4v4</p>
									</div>
								</div>
								<div className='circle-arrow'>
									<a href='#'>
										<IoMdArrowRoundForward />
									</a>
								</div>
							</div>
						</div>
						<div className='up-tournament-info'>
							<div className='up-tournament-image'>
								<img className='upcoming-cover-image' src={codImage} alt='' />
								<span>
									<img src={codMiniImage} className='cod-mini-image' alt='' />
									Call of Duty
								</span>
							</div>
							<div className='upcoming-desc'>
								<p className='upcoming-desc-date'>21 Feb-6 March, 08:00 PM</p>
								<h4 className='upcoming-desc-name'>Call Of Duty Mobile</h4>
								<p className='upcoming-desc-about'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor...
								</p>
							</div>
							<div className='upcoming-details'>
								<div>
									<p>Win Price</p>
									<div className='tour-price'>
										<img src={trophy} alt='' />
										<p>₹55.4k</p>
									</div>
								</div>
								<div>
									<p>Player Slot</p>
									<div className='tour-price'>
										<img src={gruopIcon} alt='' />
										<p>4v4</p>
									</div>
								</div>
								<div className='circle-arrow'>
									<a href='#'>
										<IoMdArrowRoundForward />
									</a>
								</div>
							</div>
						</div>
						<div className='up-tournament-info'>
							<div className='up-tournament-image'>
								<img className='upcoming-cover-image' src={codImage} alt='' />
								<span>
									<img src={codMiniImage} className='cod-mini-image' alt='' />
									Call of Duty
								</span>
							</div>
							<div className='upcoming-desc'>
								<p className='upcoming-desc-date'>21 Feb-6 March, 08:00 PM</p>
								<h4 className='upcoming-desc-name'>Call Of Duty Mobile</h4>
								<p className='upcoming-desc-about'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor...
								</p>
							</div>
							<div className='upcoming-details'>
								<div>
									<p>Win Price</p>
									<div className='tour-price'>
										<img src={trophy} alt='' />
										<p>₹55.4k</p>
									</div>
								</div>
								<div>
									<p>Player Slot</p>
									<div className='tour-price'>
										<img src={gruopIcon} alt='' />
										<p>4v4</p>
									</div>
								</div>
								<div className='circle-arrow'>
									<a href='#'>
										<IoMdArrowRoundForward />
									</a>
								</div>
							</div>
						</div>
						<div className='up-tournament-info'>
							<div className='up-tournament-image'>
								<img className='upcoming-cover-image' src={codImage} alt='' />
								<span>
									<img src={codMiniImage} className='cod-mini-image' alt='' />
									Call of Duty
								</span>
							</div>
							<div className='upcoming-desc'>
								<p className='upcoming-desc-date'>21 Feb-6 March, 08:00 PM</p>
								<h4 className='upcoming-desc-name'>Call Of Duty Mobile</h4>
								<p className='upcoming-desc-about'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor...
								</p>
							</div>
							<div className='upcoming-details'>
								<div>
									<p>Win Price</p>
									<div className='tour-price'>
										<img src={trophy} alt='' />
										<p>₹55.4k</p>
									</div>
								</div>
								<div>
									<p>Player Slot</p>
									<div className='tour-price'>
										<img src={gruopIcon} alt='' />
										<p>4v4</p>
									</div>
								</div>
								<div className='circle-arrow'>
									<a href='#'>
										<IoMdArrowRoundForward />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Upcoming;
