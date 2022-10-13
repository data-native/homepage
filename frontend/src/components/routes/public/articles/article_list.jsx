import styled from 'styled-components';
import {useOutletContext} from 'react-router-dom';
import {ArticleRow} from '../../../article/';

const StyledWrapper = styled.div`


`;

export function ArticleList()  {
  
  const context = useOutletContext();

  return (
    <StyledWrapper>
      <h1>Articles</h1>
      <div class="header">
        <div class="searchbar">
        Searchbar
      </div>
      </div>
      <div class="articles">
    <ul>
   {
     context.articles.map( (art) => 
       <ArticleRow article={art}/>
     )} 
    </ul>
      </div>

      
    </StyledWrapper>
  )
  

};

