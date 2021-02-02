import React from 'react';
export default function Marsallis(props) {
	const throwToKevin = () => {
		props.throwFootBall({ turn: 'Kevin' });
	};
	return (
		<div>
			{props.footBall.turn === 'Marsallis' ? (
				<>
					I am Marsallis
					<div onClick={throwToKevin}>
						<img
							src={
								'https://www.dropbox.com/s/go9vjstmo5hdw9c/american_football_PNG90.png?dl=1'
							}
						/>
					</div>
				</>
			) : (
				'I Marsallis through the football to Kevin'
			)}
		</div>
	);
}
