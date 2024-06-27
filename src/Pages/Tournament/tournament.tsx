import { useEffect } from 'react';
import tournamentDraw from '../../assets/images/tournament-svg.svg';
import './tournament.scss'

function Tournament() {
	useEffect(() => {
		window.scrollTo({
			top: 0
		})
	})
	return (
		<>
			<div id='tournament'>
				<div className='container-base'>
					<div className='tournament-page'>
						<img src={tournamentDraw} alt='' />
					</div>
				</div>
			</div>
		</>
	);
}

export default Tournament;
