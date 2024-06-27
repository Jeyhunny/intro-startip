import { BsDiscord } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import './signin.scss';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { JwtPayload, jwtDecode } from 'jwt-decode';

function Signin() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();

	const handleLogin = async () => {
		try {
			const response = await axios.post('https://igame.onrender.com/login', {
				email,
				password,
			});
			console.log(response.data);
			if (response.data == 'User does not exist') {
				throw new Error();
			}

			toast.success('Successfully logged in system');
			setTimeout(() => {
				navigate('/');
			}, 3000);
		} catch (error) {
			toast.error('An error occurred');
		}
	};
	return (
		<section id='sign-in'>
			<div className='container-base'>
				<div className='sign-in'>
					<div className='sign-in-center'>
						<div>
							<div className='sign-in-center-header'>
								<h3>Welcome back</h3>
							</div>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									handleLogin();
								}}
							>
								<div className='form-login'>
									<div>
										<div>
											<label htmlFor='email'>Email</label>
										</div>
										<div>
											<input
												type='email'
												name='email'
												id='email'
												className='sign-in-input'
												placeholder='Type your email'
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
									</div>
									<div>
										<label htmlFor='password'>Password</label>
										<input
											type='password'
											name='password'
											id='password'
											className='sign-in-input'
											placeholder='Type your password'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<p className='forgot-password-text'>
											Forgot your password ?
										</p>
									</div>
								</div>
								<div className='form-submit'>
									<button
										disabled={!email || !password}
										type='submit'
										className='button-submit'
									>
										Sign in
									</button>
									<Toaster
										position='bottom-right'
										toastOptions={{
											duration: 3000,
										}}
									/>
									<p>
										<Link to='/signup'>New to Igame? Sign up</Link>
									</p>
									<div id='or'>
										<p>Or</p>
									</div>
								</div>
							</form>
						</div>
						<div className='other-entries'>
							<div className='entries'>
								<div className='social-icons'>
									<GoogleLogin
										shape='pill'
										type='icon'
										onSuccess={(credentialResponse: CredentialResponse) => {
											if (credentialResponse.credential) {
												const decoded: JwtPayload = jwtDecode<JwtPayload>(
													credentialResponse.credential
												);
												console.log(decoded);
											} else {
												console.error('No credential found in response');
											}
										}}
										onError={() => {
											console.log('Login Failed');
										}}
									/>
									;
								</div>
								<div className='social-icons'>
									<BsDiscord color='#5566FB' />
								</div>
								<div className='social-icons'>
									<FaFacebook color='#0079FB' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Signin;
