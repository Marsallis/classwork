import React, { useState } from 'react';
import Home from './Home';
import NameForm from './NameForm';
// import Counter from './Counter';

export default function App(props) {
	const [name, updateName] = useState('Arthur');
	return (
		<div className="Page-wrapper">
			<h2>Ruth App</h2>
			<Home />
			<br />
			<br />
			<hr />
			<NameForm />
		</div>
	);
}
