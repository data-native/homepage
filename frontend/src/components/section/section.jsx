export function Section(props) {
	const { section } = props;
	let learningList = section.learnings.map( learning => 
		   <li>{learning}</li>
		);

	return (
	<div>
		<h1>{section.title}</h1>
		<h2>{section.subtitle}</h2>
		<ul>
		{learningList}
		</ul>
	</div>
	);
}
