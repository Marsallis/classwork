import React from 'react';

export default function MovieInfo(props) {
	return (
		<div ClassName={'column'}>
			<h1>Title: {props.movie.Title}</h1>
			<h2>Year Released: {props.movie.Year}</h2>
			<div>
				<img src={props.movie.Poster} />
			</div>
		</div>
	);
}
