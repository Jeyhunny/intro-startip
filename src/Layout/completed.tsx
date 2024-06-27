import '../assets/styles/layout/completed.scss';
import teamPhoto from '../assets/images/team-photo.svg';

function Completed() {
	return (
		<div id='completed-tournts'>
			<div className='container-base'>
				<div className='completed-tournts'>
					<div className='completed-tournts-team-photo'>
						<img src={teamPhoto} alt='' />
					</div>
					<div className='completed-tournts-create'>
						<h3>Completed Tournaments</h3>
						<p className='completed-tournts-description'>
							Create a Space for free to host your own competitions, build a
							membership community and monetize.
						</p>
						<button className='create-space-now'>CREATE SPACE NOW →</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Completed;
