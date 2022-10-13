import styled from 'styled-components';
import {Outlet} from 'react-router-dom';

const StyledWrapper = styled.div`

`;

export function AdminArticleList() {
  return (
    <StyledWrapper>
      <div class="header">
        <h1>Articles</h1>
      </div> 
      <side class="side">
      </side>
      <div class="content">
        <p>Content</p>
        <Outlet />
      </div>
    </StyledWrapper>
  )
}
