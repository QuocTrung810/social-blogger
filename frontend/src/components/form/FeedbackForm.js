import React, { useState } from 'react';
import '../../styles/FeedbackForm.css';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function FeedbackForm() {
	const [errors, setErrors] = useState({
		email: { isError: false, errMsg: '' },
		feedback: { isError: false, errMsg: '' },
	});

	const [values, setValues] = useState({
		email: '',
		feedback: '',
	});

	const handleSendFeedback = (e) => {
		if (values.email === '') {
			setErrors((prev) => {
				return {
					...prev,
					email: { isError: true, errMsg: 'Please enter your email' },
				};
			});
		} else if (values.feedback === '') {
			setErrors((prev) => {
				return {
					...prev,
					feedback: {
						isError: true,
						errMsg: 'Please enter your feedback',
					},
				};
			});
		} else e.preventDefault();
	};

	const handleChangeValue = (e, type) => {
		if (type === 'email') {
			setErrors((prev) => {
				return {
					...prev,
					email: { isError: false, errMsg: '' },
				};
			});
			setValues((prev) => {
				return { ...prev, email: e.target.value };
			});
		} else {
			setErrors((prev) => {
				return {
					...prev,
					feedback: { isError: false, errMsg: '' },
				};
			});
			setValues((prev) => {
				return { ...prev, feedback: e.target.value };
			});
		}
	};

	return (
		<form>
			<div className='form__group'>
				<label
					className='form__label'
					htmlFor='email'
				>
					Email:
				</label>
				<input
					className='form__control'
					type='email'
					id='email'
					placeholder='abc@domain.com'
					value={values.email}
					onChange={(e) => handleChangeValue(e, 'email')}
				/>
				{errors.email.isError ? (
					<div className='form__valid'>
						<RiErrorWarningLine />
						{errors.email.errMsg}
					</div>
				) : (
					''
				)}
			</div>
			<div className='form__group'>
				<label
					className='form__label'
					htmlFor='feedback'
				>
					Feedback:
				</label>
				<textarea
					className='form__control'
					id='feedback'
					rows={3}
					value={values.feedback}
					onChange={(e) => handleChangeValue(e, 'textarea')}
				/>
				{errors.feedback.isError ? (
					<div className='form__valid'>
						<RiErrorWarningLine />
						{errors.feedback.errMsg}
					</div>
				) : (
					''
				)}
			</div>
			<div className='form__group'>
				<button onClick={handleSendFeedback}>Send</button>
			</div>
		</form>
	);
}
