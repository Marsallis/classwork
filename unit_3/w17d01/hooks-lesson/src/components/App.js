import React, { useState, useEffect, useRef } from 'react';
import OurContext from '../context';
export default function App(props) {
	const [greet, setGreet] = useState('hello world');
	return <OurContext.Provider value={greet}>{greet}</OurContext.Provider>;
}
