import '../assets/styles/layout/offTournaments.scss';
import csCops from '../assets/images/c-ops-image.svg';
import csPolice from '../assets/images/cs-police.svg';
import csKalash from '../assets/images/cs-kalash.svg';
import csWithFriends from '../assets/images/cs-friends.svg';

function OffTournaments() {
	return (
		<div id='offline-tournaments'>
			<div className='container-base'>
				<div className='offline-tournaments'>
					<div className='offline-tournaments-left'>
						<div className='offline-tournaments-heading'>
							<h3>Offline Tournaments</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur. Tincidunt mattis massa
								nunc amet fames egestas. Nunc semper a dapibus orci lorem
								pulvinar.
							</p>
						</div>
						<div className='cops-offline'>
							<div className='cops-image'>
								<img src={csCops} alt='' />
							</div>
							<div className='critical-ops'>
								<h3>Critical-Ops</h3>
								<p>MULTIPLAYER</p>
								<p>ACTION</p>
								<p>
									Lorem ipsum dolor sit amet consectetur. Tincidunt mattis massa
									nunc amet fames egestas.Nunc semper a dapibus orci lorem
									pulvinar.
								</p>
							</div>
						</div>
					</div>
					<div className='offline-tournaments-right'>
						<div>
							<img src={csPolice} alt='' />
						</div>
						<div>
							<img src={csKalash} alt='' />
						</div>
						<div>
							<img src={csWithFriends} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OffTournaments;
