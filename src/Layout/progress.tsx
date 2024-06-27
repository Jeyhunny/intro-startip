import '../assets/styles/layout/progress.scss';
import progressPhoto from '../assets/images/progress-photo.svg';
import leagueoflegends from '../assets/images/leagueoflegends.svg';
import valorantImage from '../assets/images/valorant-image.svg';

function Progress() {
	return (
		<div id='progress-tournaments'>
			<div className='container-base'>
				<div className='progress-tournaments'>
					<div>
						<h3 className='progress-tournaments-heading'>
							In Progress Tournaments
						</h3>
						<p className='progress-tournaments-description'>
							It was said that Aenean was not a vulputate, but a eu. It was a
							weekend. Suspendisse bibendum felis ullamcorper mauris ullamcorper
						</p>
						<button className='browse-all-games'>BROWSE ALL GAMES</button>
					</div>
					<div>
						<div className='progress-tournaments-images'>
							<div className='first-tournament-image'>
								<img src={progressPhoto} alt='' />
							</div>
							<div className='tournament-image'>
								<img src={leagueoflegends} alt='' />
							</div>
							<div className='tournament-image'>
								<img src={valorantImage} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Progress;
