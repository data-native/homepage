import React from 'react';

function Topic(props) {
return (
	<div className="this">
		<h1>{props.title}</h1>
		<h2>{props.subtitle}</h2>
		<p>{props.content}</p>
	</div>
);
}

export default Topic;
