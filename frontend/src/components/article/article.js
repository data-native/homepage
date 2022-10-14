import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 50%;
  grid-template-rows: 10% 90%;
  grid-template-areas:
  "bar bar"
  "header content";
  border: 1px dashed grey;
  background-color: white;
  
  .header {
    grid-area: header;
  }
  .content {
    grid-area: content;
  }
  .bar {
    grid-area: bar;
  }
`;



export function ArticleRow({article}) {
return (
  <StyledWrapper>
    <div class="header">
      <h1>{article.Title}</h1>
      <h2>{article.Subtitle}</h2>
    </div>
    <div class="content">
      <p>{article.Content}</p>
    </div>
    <div class="bar">
      Tags
    </div>
	</StyledWrapper>
);
}

