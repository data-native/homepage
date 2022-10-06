import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "content"
  "footer";

  border: 1px solid grey;
  padding: 40px;
  margin-bottom: 30px;

  .learning ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

`;

export function Section(props) {
	const { section } = props;
	let learningList = section.learnings.map( learning => 
		   <li>{learning}</li>
		);

	return (
	<StyledWrapper>
    <div class="header">
      <span class="learning">
      {learningList}
    </span>
      <h1>{section.title}</h1>
      <h2>{section.subtitle}</h2>
    </div>
    <div class="content">
    </div>
	</StyledWrapper>
	);
}
