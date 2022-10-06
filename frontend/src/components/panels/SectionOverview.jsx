import styled from 'styled-components';
import {Section} from '../section';


const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
  "header"
  "content"
  "links";

  .header {
    grid-area: header;
    border: 1px dashed red;
  }

  .content {
    grid-area: content;
  }

  .links {
    grid-area: links;
  }

`;

export function SectionOverview(props) {
	const {title, subtitle, sections} = props;

	return (
	<StyledWrapper>
    <div class="header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
    <div class="content">
      {sections.map( section => 
      <Section section={section}/>)
      }
    </div>
    <div class="links">
    </div>
	</StyledWrapper>
	)
}
