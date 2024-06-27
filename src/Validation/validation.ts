import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
	fullName: Yup.string()
		.min(2, 'Too Short!')
		.max(12, 'Too Long!')
		.required('Required'),
	teamName: Yup.string()
		.min(2, 'Too Short!')
		.max(12, 'Too Long!')
		.required('Required'),
	valoPlayerName: Yup.string()
		.min(2, 'Too Short!')
		.max(12, 'Too Long!')
		.required('Required'),
	tagName: Yup.string()
		.min(2, 'Too Short!')
		.max(12, 'Too Long!')
		.required('Required'),
	personalId: Yup.string()
		.min(2, 'Too Short!')
		.max(12, 'Too Long!')
		.required('Required'),
	phoneNumber: Yup.string()
		.min(2, 'Too Short!')
		.max(12, 'Too Long!')
		.required('Required'),
});
