import Header from './Layout/header';
import Footer from './Layout/footer';
import Homepage from './Pages/Home_Page/homepage';
import Formpage from './Pages/Form_Page/formpage';
import { Routes, Route } from 'react-router-dom';
import Tournament from './Pages/Tournament/tournament';
import Signin from './Pages/SignIn/signin';
import Signup from './Pages/SignUp/signup';


function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/tournament' element={<Tournament />} />
				<Route path='/form' element={<Formpage />} />
				{/* <Route element={<PrivateRoutes />}>
					<Route path='/tournament' element={<Tournament />} />
					<Route path='/form' element={<Formpage />} />
				</Route> */}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
