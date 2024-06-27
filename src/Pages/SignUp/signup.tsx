import { FcGoogle } from 'react-icons/fc';
import { BsDiscord } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import './signup.scss';
//import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';

//Functionality import
import { useState, FormEvent } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// import OTPInput from 'react-otp-input';

interface RegisterFormState {
	email: string;
	password: string;
	confirmPassword: string;
	errors: {
		email?: string;
		password?: string;
		confirmPassword?: string;
	};
	isLoading: boolean;
}
//End of import

function Signup() {
	// const [otp, setOtp] = useState('');
	

	//Functionality logic
	const [state, setState] = useState<RegisterFormState>({
		email: '',
		password: '',
		confirmPassword: '',
		errors: {},
		isLoading: false,
	});
	const navigate = useNavigate();

	const { email, password, confirmPassword, errors, isLoading } = state;

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Perform form validation
		const newErrors: RegisterFormState['errors'] = {};
		if (!email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email = 'Email is invalid';
		}
		if (!password) {
			newErrors.password = 'Password is required';
		} else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
			newErrors.password = 'Password is invalid';
		}
		if (!confirmPassword) {
			newErrors.confirmPassword = 'Please confirm your password';
		} else if (password !== confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match';
		}
		setState((prevState) => ({ ...prevState, errors: newErrors }));

		if (Object.keys(newErrors).length === 0) {
			// Call register API
			setState((prevState) => ({ ...prevState, isLoading: true }));
			try {

				const response = await axios.post('https://igame.onrender.com/register', {
					email: `${email}`,
					password: `${password}`,
				});
				// Reset form fields
				setState((prevState) => ({
					...prevState,
					email: '',
					password: '',
					confirmPassword: '',
				}));
				// Assuming your backend returns a success message upon successful registration
				toast.success(
					response.data.message || 'Successfully registered,now please login'
				);
				setTimeout(() => {
					navigate('/signin');
				}, 3000);
			} catch (error) {
				// Handle error
				if (axios.isAxiosError(error)) {
					toast.error(
						error.response?.data?.message || 'Error registering user'
					);
					console.error('Error registering user:', error.message);
				} else {
					toast.error('Error registering user');
					console.error('Error registering user:', error);
				}
			} finally {
				setState((prevState) => ({ ...prevState, isLoading: false }));
			}
		}
	};

	const handleInputChange = (
		fieldName: keyof RegisterFormState,
		value: string
	) => {
		setState((prevState) => ({ ...prevState, [fieldName]: value }));
	};

	//End of logic
	return (
		<section id='sign-up'>
			<div className='container-base'>
				<div className='sign-up'>
					<div className='sign-up-center'>
						<div>
							<div className='sign-up-center-header'>
								<h3>Sign up to Igame</h3>
							</div>
							<form onSubmit={handleSubmit}>
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
												className='sign-up-input'
												placeholder='Type your email'
												value={email}
												onChange={(e) =>
													handleInputChange('email', e.target.value)
												}
											/>
											{errors.email && (
												<span
													className='error'
													style={{
														color: 'red',
														marginTop: '16px',
														display: 'inline-block',
													}}
												>
													{errors.email}
												</span>
											)}
										</div>
									</div>
									<div>
										<label htmlFor='password'>Create a password</label>
										<input
											type='password'
											name='password'
											id='password'
											className='sign-up-input'
											placeholder='Type your password'
											value={password}
											onChange={(e) =>
												handleInputChange('password', e.target.value)
											}
										/>
										{errors.password && (
											<span
												className='error'
												style={{
													color: 'red',
													marginTop: '16px',
													display: 'inline-block',
												}}
											>
												{errors.password}
											</span>
										)}
									</div>
									<div>
										<label htmlFor='password'>Confirm password</label>
										<input
											type='password'
											name='confirmPassword'
											id='confirmPassword'
											className='sign-up-input'
											placeholder='Type your password again'
											value={confirmPassword}
											onChange={(e) =>
												handleInputChange('confirmPassword', e.target.value)
											}
										/>
										{errors.confirmPassword && (
											<span
												className='error'
												style={{
													color: 'red',
													marginTop: '16px',
													display: 'inline-block',
												}}
											>
												{errors.confirmPassword}
											</span>
										)}
									</div>
								</div>
								<div className='form-submit'>
									<button
										type='submit'
										className='button-submit'
										disabled={isLoading}
									>
										{isLoading ? 'Loading...' : 'Register'}
									</button>
									<Toaster
										position='bottom-right'
										toastOptions={{
											duration: 3000,
										}}
									/>
									<p className='signup-rules'>
										<span>By creating an account, you agree to our</span>
										<a href='#'>Terms of Use</a>
										<span>Our</span>
										<br />
										<a href='#'>Privacy Policy</a>
										<span>explains how we protect your data.</span>
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
									<FcGoogle />
								</div>
								<div className='social-icons'>
									<BsDiscord color='#5566FB' />
								</div>
								<div className='social-icons'>
									<FaFacebook color='#0079FB' />
								</div>
							</div>
							<div className='alreadt-account-text'>
								<p>
									<Link to='/signin'>Already have an account ? Log in</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='otp-code'>
				<div className='email-code'>
					<div>
						<h3>Please enter the code sent to your email</h3>
					</div>
					<div>
						<OTPInput
							value={otp}
							onChange={setOtp}
							numInputs={6}
							containerStyle={{
								backgroundColor: 'transparent',
								display: 'flex',
								alignItems: 'start',
								gap: '44px',
							}}
							// renderSeparator={<span>-</span>}
							renderInput={(props) => (
								<input
									{...props}
									className='otp-input'
									style={{ border: '1px solid #8B8B8B' }}
								/>
							)}
						/>
					</div>
					<button className='cancel'>X</button>
				</div>
			</div> */}
		</section>
	);
}

export default Signup;
