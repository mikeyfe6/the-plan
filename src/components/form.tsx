import React from 'react';

import * as formStyles from '../styles/modules/form.module.scss';

const Form: React.FC = () => {
	return (
		<form
			name='contactForm'
			method='post'
			data-netlify='true'
			data-netlify-honeypot='bot-field'
			className={formStyles.form}>
			<input type='hidden' name='form-name' value='contactForm' />
			<label htmlFor='name'>Naam</label>
			<input type='text' name='name' id='name' />
			<label htmlFor='email'>E-mail</label>
			<input type='email' name='email' id='email' />
			<label htmlFor='message'>Bericht</label>
			<textarea name='message' id='message'></textarea>
			<button type='submit'>Versturen</button>
		</form>
	);
};

export default Form;
