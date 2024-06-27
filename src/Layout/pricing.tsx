import '../assets/styles/layout/pricing.scss';
import checkIcon from '../assets/images/check-icon.svg';

function Pricing() {
	return (
		<div id='pricing'>
			<div className='container-base'>
				<div className='pricing'>
					<div className='pricing-top'>
						<h4>Subscription</h4>
						<h3>Simple, transparent pricing</h3>
						<p>
							We believe Untitled should be accessible to all companies, no
							matter the size.
						</p>
					</div>
					<div className='pricing-bottom'>
						<div className='pricing-box'>
							<div className='pricing-box-info'>
								<p className='pricing-box-head'>Gamers</p>
								<p className='pricing-box-subhead'>Basic plan</p>
								<p className='pricing-box-text'>
									Price for the service each <br /> our tournament
								</p>
							</div>
							<div className='pricing-get-started'>
								<button>Get started</button>
							</div>
						</div>
						<div className='pricing-box'>
							<div>
								<p className='pricing-box-head'>Bussines partner</p>
								<p className='pricing-box-subhead'>Business plan</p>
								<div className='business-plan-benefits'>
									<div className='business-plan-benefit'>
										<img src={checkIcon} alt='' />
										<p>80$ ( 1 tournament )</p>
									</div>
									<div className='business-plan-benefit'>
										<img src={checkIcon} alt='' />
										<p>150$ ( 3 tournament)</p>
									</div>
									<div className='business-plan-benefit'>
										<img src={checkIcon} alt='' />
										<p>Limitless tournament 300$</p>
									</div>
								</div>
							</div>
							<div className='pricing-get-started'>
								<button>Get started</button>
							</div>
						</div>
						<div className='pricing-box'>
							<div className='pricing-box-info'>
								<p className='pricing-box-head'>Sponsorship</p>
								<p className='pricing-box-subhead'>Enterprise plan</p>
								<p className='pricing-box-text'>
									Advertising,
									<br /> marketing and brand sales
								</p>
							</div>
							<div className='pricing-get-started'>
								<button>Get started</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;
