import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useContext, useParams} from 'react-router-dom';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "content"
  "footer";

  .header {
    grid-area: header;  
  }
  .content {
    grid-area: content;  
  }
  .footer {
    grid-area: footer;  
  }
`;

export function ArticleDetail() {
  const [article, setArticle] = useState(null);
  
  const {articleId} = useParams({
    Title: "",
    Subtitle:"",

  });
  useEffect(() => {
    async function getArticle() {
      axios({
        method: 'get',
        url: process.env.REACT_APP_BACKEND_URL + "/article/" + articleId
      }).then( response => {
        setArticle(response.data)
      })
    };
    getArticle();
  }, []);
  


  return (
    <StyledWrapper>
      <div class="header">
        <div className="infobox">
          <span></span>
        </div>
        <h1> {article?.Title ?? "Not loaded"}</h1>
        <h2> {article?.Subtitle ?? "Loading"}</h2>
      </div>ia
      <div class="content">
        <p>{article?.Content ?? "Loading"} </p>
      </div>
      <div className="footer">
        <h2>Further reading</h2>
          <ul className="readings">
            <li>test</li>
          </ul>
        <p>Furt</p>
      </div>
    </StyledWrapper>
  )
}
