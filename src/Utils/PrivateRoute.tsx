import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
	const cookies = document.cookie.split('; ');
	let token;

	cookies?.forEach((cooki) => {
		const [name, value] = cooki.split('=');
		if (name === 'token') {
			token = value;
		}
	});
	console.log(Outlet);
	
	return token ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoutes;
