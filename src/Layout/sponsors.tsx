import steamLogo from '../assets/images/steam-logo.svg';
import microsoftLogo from '../assets/images/microsoft-logo.svg';
import xboxLogo from '../assets/images/xbox-logo.svg';
import psLogo from '../assets/images/ps-logo.svg';
import playLogo from '../assets/images/play-logo.svg';
import '../assets/styles/layout/sponsors.scss'

function Sponsors() {
	return (
		<div className='container-base'>
			<div className='sponsors'>
				<div>
					<img src={steamLogo} alt='' />
				</div>
				<div>
					<img src={microsoftLogo} alt='' />
				</div>
				<div>
					<img src={xboxLogo} alt='' />
				</div>
				<div>
					<img src={psLogo} alt='' />
				</div>
				<div>
					<img src={playLogo} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Sponsors;
