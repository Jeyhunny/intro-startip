import eventLogo from '../../assets/images/Character_images/Addon Cover.svg';
import gameLogo from '../../assets/images/game-logo-formpage.svg';
import { TfiLocationPin } from 'react-icons/tfi';
import eventDescriptionPhoto from '../../assets/images/event-description-photo.svg';

import './formpage.scss';

// Material Modal
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { FormSchema } from '../../Validation/validation.ts';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Formpage() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigate = useNavigate();
	const handleSubmit = async (values: any) => {
		console.log(values);
		try {
			const response = await axios.post(
				'https://igame.onrender.com/tournament/create',
				{
					fullName: `${values.fullName}`,
					teamName: `${values.teamName}`,
					valoPlayerName: `${values.valoPlayerName}`,
					tagName: `${values.tagName}`,
					personalId: `${values.personalId}`,
					phoneNumber: `${values.phoneNumber}`,
				}
			);

			if (response.data.success === false) {
				toast.error('An error occured.');
			}
			toast.success('Your data sent to our system,we will contact with you.');
			setTimeout(() => {
				navigate("/");
			}, 3000);
		} catch (error) {
			toast.error('An error occured.');
		}
	};
	return (
		<section id='form-page'>
			<div className='container-base'>
				<div className='form-page'>
					<div>
						<Toaster
							position='bottom-right'
							toastOptions={{
								duration: 3000,
							}}
						/>
						<Modal
							aria-labelledby='transition-modal-title'
							aria-describedby='transition-modal-description'
							open={open}
							onClose={handleClose}
							closeAfterTransition
							slots={{ backdrop: Backdrop }}
							slotProps={{
								backdrop: {
									timeout: 500,
								},
							}}
						>
							<Fade in={open}>
								<div className='form-modal'>
									<div>
										<h3>Don’t miss this chance, and join the tournament </h3>
										<p className='fill-blank-text'>
											Fill the blank and wait for living the most exciting
											moments of your life.{' '}
										</p>
									</div>
									<Formik
										initialValues={{
											fullName: '',
											teamName: '',
											valoPlayerName: '',
											tagName: '',
											personalId: '',
											phoneNumber: '',
										}}
										validationSchema={FormSchema}
										onSubmit={handleSubmit}
									>
										{({ errors, touched }) => (
											<Form className='form-create'>
												<div className='inputs'>
													<label htmlFor='fullName'>Name</label>
													<Field
														name='fullName'
														type='text'
														id='fullName'
														placeholder='Type your name and surname'
													/>
													{errors.fullName && touched.fullName ? (
														<div
															style={{
																color: 'red',
																padding: '0.2rem',
																borderRadius: '4px',
															}}
														>
															Name is {errors.fullName}
														</div>
													) : null}
												</div>
												<div className='inputs'>
													<label htmlFor='teamName'>Team name</label>
													<Field
														name='teamName'
														type='text'
														id='teamName'
														placeholder='Type your team name'
													/>
													{errors.teamName && touched.teamName ? (
														<div
															style={{
																color: 'red',
																padding: '0.2rem',
																borderRadius: '4px',
															}}
														>
															Surname is {errors.teamName}
														</div>
													) : null}
												</div>
												<div className='inputs'>
													<label htmlFor='valoPlayerName'>
														Valorant Player name
													</label>
													<Field
														name='valoPlayerName'
														type='text'
														placeholder='Type your valorant player name'
													/>
													{errors.valoPlayerName && touched.valoPlayerName ? (
														<div
															style={{
																color: 'red',
																padding: '0.2rem',
																borderRadius: '4px',
															}}
														>
															Player name is {errors.valoPlayerName}
														</div>
													) : null}
												</div>
												<div className='inputs'>
													<label htmlFor='tagName'>Tag name</label>
													<Field
														name='tagName'
														type='text'
														placeholder='Type your team member'
													/>
													{errors.tagName && touched.tagName ? (
														<div
															style={{
																color: 'red',
																padding: '0.2rem',
																borderRadius: '4px',
															}}
														>
															Tag name is {errors.tagName}
														</div>
													) : null}
												</div>
												<div className='inputs'>
													<label htmlFor='personalId'>Personal ID</label>
													<Field
														id='personalId'
														name='personalId'
														type='text'
														placeholder='Type your identification number'
													/>
													{errors.personalId && touched.personalId ? (
														<div
															style={{
																color: 'red',
																padding: '0.2rem',
																borderRadius: '4px',
															}}
														>
															Personal ID is {errors.personalId}
														</div>
													) : null}
												</div>
												<div className='inputs'>
													<label htmlFor='phoneNumber'>Phone Number</label>
													<Field
														id='phoneNumber'
														name='phoneNumber'
														type='tel'
														placeholder='Type your phone number'
													/>
													{errors.phoneNumber && touched.phoneNumber ? (
														<div
															style={{
																color: 'red',
																padding: '0.2rem',
																borderRadius: '4px',
															}}
														>
															Phone number is {errors.phoneNumber}
														</div>
													) : null}
												</div>
												<div>
													<button
														className='form-modal-confirm-button'
														type='submit'
													>
														Confirm
													</button>
												</div>
											</Form>
										)}
									</Formik>
								</div>
							</Fade>
						</Modal>
					</div>
					<div className='event-info'>
						<div className='create-and-join-event'>
							<div className='event-logo'>
								<img src={eventLogo} alt='' />
							</div>
							<div className='create-and-join-buttons'>
								<button className='create-team'>Create a team</button>
								<button className='join-team' onClick={handleOpen}>
									Join the team
								</button>
							</div>
						</div>
						<div className='event-data'>
							<div className='game-logo'>
								<img src={gameLogo} alt='' />
							</div>
							<div className='event-info-date'>
								<p>
									<span>Valorant</span>
									<span>|</span>
									<span>Level</span>
									<span>|</span>
									<span>5.3GB</span>
									<span>|</span>
									<span>12.04.2024</span>
									<span>|</span>
									<span>22:00</span>
									<span>|</span>
									<span>
										<TfiLocationPin />
									</span>
									<span>G4me Online</span>
								</p>
							</div>
							<div className='event-description'>
								<div>
									<p className='event-desc-info'>
										In Valorant lore, Jett is an agile agent expert in the art
										of evasion. She overwhelms enemies and wounds them with a
										blade without them knowing her position.
									</p>
								</div>
								<div className='event-description-photo'>
									<img src={eventDescriptionPhoto} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Formpage;
