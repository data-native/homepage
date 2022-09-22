import {Section} from '../section';

export function SectionOverview(props) {
	const {sections} = props
	let sectionList = sections.map(section => 
	<li>{section.title}</li>);

	return (
	<div>
	<h1>Learn to scale your startup</h1>
	{sections.map( section => 
	<Section section={section}/>)
	}
	</div>
	)
}
