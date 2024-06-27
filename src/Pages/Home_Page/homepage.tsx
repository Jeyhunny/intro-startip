import About from '../../Layout/about';
import Banner from '../../Layout/banner';
import Completed from '../../Layout/completed';
import JoinClub from '../../Layout/joinClub';
import OffTournaments from '../../Layout/offTournaments';
import Pricing from '../../Layout/pricing';
import Progress from '../../Layout/progress';
import Sponsors from '../../Layout/sponsors';
import Upcoming from '../../Layout/upcoming';

function Homepage() {
	return (
		<>
			<Banner />
			<Sponsors />
			<Upcoming />
			<Progress />
			<Completed />
			<JoinClub />
			<OffTournaments />
			<Pricing />	
			<About />
		</>
	);
}

export default Homepage;
