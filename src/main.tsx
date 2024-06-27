import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>

	<BrowserRouter>
		<GoogleOAuthProvider clientId='1097139892114-01b8ml6pishhch23pue42cbd3ben78rh.apps.googleusercontent.com'>
			<App />
		</GoogleOAuthProvider>
		;
	</BrowserRouter>
	// </React.StrictMode>,
);
