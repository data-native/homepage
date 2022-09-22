import {Content} from '../content';

export function ContentOverview({contents}) {
	let contentList = contents.map(content => 
	<Content content={content} />);

	return (
	<div>
	<h1>Get started by content</h1>
	<p>Jump right in based on your prefered learning mode</p>
	{contentList}
	</div>
	)
}
