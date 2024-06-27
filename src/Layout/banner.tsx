import { Link } from 'react-router-dom';
import charBg from '../assets/images/banner-char-image.svg';
import videoImage from '../assets/images/VideoImage.svg';
import polygonRomb from '../assets/images/Polygon-romb-banner.svg';

function Banner() {
	return (
		<section className='banner-section'>
			<section className='banner'>
				<div className='container-base'>
					<div className='banner-tournament-info'>
						<img src={charBg} alt='' className='char-bg' />
						<div className='banner-left'>
							<h3>Answer the call to greatness. Valorant awaits!</h3>
							<p>
								Hurry to join in the greatest Valorant tournament of all time.
								Fight till the end and get the reward
							</p>
							<button className='new-tournament-button'>New Tournament</button>
						</div>
						<div className='banner-right'>
							<div className='tournament-info'>
								<div className='polygon-romb'>
									<img src={polygonRomb} alt='' />
								</div>
								<div className='tournament-time'>
									<div className='tournament-date-clock'>
										<span>APRIL</span>
										<span>02</span>
										<span>14:32:38</span>
									</div>
									<div className='tournament-time-image'>
										<img src={videoImage} alt='' />
									</div>
								</div>
								<Link to={'/form'} className='join-tournament-button'>
									Join Tournament →
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Banner;
