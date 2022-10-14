import styled from 'styled-components';
import {useOutletContext} from 'react-router-dom';
import {ArticleRow} from '../../../article/';
import {SearchBar} from '../../../search';

const StyledWrapper = styled.div`


`;

export function ArticleList()  {

  const context = useOutletContext();
  console.log('Logging context')
  console.log(context)

  return (
    <StyledWrapper>
      <h1>Articles</h1>
      <div class="header">
        <div class="searchbar">
          <SearchBar handleChange={(e) => context.handleFilter(e)}/> 
        </div>
      </div>
      <div class="articles">
     {
       context.filtered.map( (art) => 
         <ArticleRow article={art} key={art.SK}/>
       )
     } 
      </div>
    </StyledWrapper>
  )
  

};

