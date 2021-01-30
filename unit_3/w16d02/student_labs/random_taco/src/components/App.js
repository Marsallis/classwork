import React, { useState } from 'react';
import TacoData from '../Tacos';
export default function App(props) {
	const [tacos, setTacos] = useState(TacoData);
	return (
		<div>
			<h1>Random Taco!</h1>
			<div className={'container'}>
				{tacos.map(Tacos => {
					return (
						<Tacos
							key={`${tacos[0].name}${tacos[0].recipe}${tacos[0].slug}${tacos[0].url}`}
							taco={taco}
						/>
					);
				})}
			</div>
		</div>
	);
}
