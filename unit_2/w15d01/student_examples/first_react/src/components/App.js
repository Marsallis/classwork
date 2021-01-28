import React, { useState } from 'react';
// import Home from './Home';
import Counter from './Counter';

export default function App(props) {
	const [name, updateName] = useState('Arthur');
	return (
		<div className="Page-wrapper">
			<h2>Ruth App</h2>
			<Counter />
		</div>
	);
}
