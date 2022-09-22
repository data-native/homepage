export function Content({content}) {
  return (
  	<div>
		<h1>{content.type}</h1>
		<h2>{content.description}</h2>
		<div>
		This will display sample content for the given type
		</div>
	</div>
  )
}
