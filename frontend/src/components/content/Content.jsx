import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "content"
  "footer";

  grid-template-rows: 25% 55% 20%;
  
  max-width: 250px;
  border: 1px solid grey;
  padding: 25px;
  
  .header {
    grid-area: header;
  }
  .description {
    grid-area: content;
  }
  .footer {
    grid-area: footer;
  }
`;

export function Content({content}) {
  return (
  	<StyledWrapper>
    <div class="header">
      <h1>{content.type}</h1>
    </div>
    <div class="description">
      <h2>{content.description}</h2>
    </div>
    <div class="footer">
      The footer element
    </div>
	</StyledWrapper>
  )
}
