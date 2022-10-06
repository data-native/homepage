import styled from 'styled-components';
import {Content} from '../content';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "content"
  "footer";

  margin: 25px 0px;

  .header {
    grid-area: header;
  }
  .content {
    display: inline-grid;
    grid-area: content;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .footer {
    grid-area: footer;
  }
`;


export function ContentOverview({contents}) {
	let contentList = contents.map(content => 
	<Content content={content} />);

	return (
	<StyledWrapper>
    <div class="header">
      <h1>Get started by content</h1>
      <p>Jump right in based on your prefered learning mode</p>
    </div>
    <div class="content">
      {contentList}
    </div>
    <div class="footer">
      <p>Content overview footer</p>
    </div>
	</StyledWrapper>
	)
}
