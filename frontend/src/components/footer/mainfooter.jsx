import styled from 'styled-components';
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 50%;
  grid-template-areas:
  "sections links summary";

  margin: -40px;
  padding: 70px 20px;
  background: lightgrey;

  div {
    margin: 10px;
    color: lightgrey;
  }

  .sections {
    grid-area: sections;
  }
  .links {
    grid-area: links;
  }

  .summary {
    grid-area: summary;
  }
`;

export function Mainfooter () {
  return (
    <StyledWrapper>
      <div class="sections">
      The overview of all sections of the page
      </div>
      <div class="links">
      The link collection
      </div>
      <div class="summary">
      Data native is your one stop shop for all things data in the cloud. We provide you the best curated learning sources for free as we develop our own applications and gather our learning.

      It is a welcoming place to share your challenges and learning and collaborate to develop better reference solutions for all.
      </div>
    
    </StyledWrapper>
  );
}
