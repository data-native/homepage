import React from 'react';
import axios from 'axios';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-areas:
  "header header"
  "side content";
  
  div {
    margin: 10px;
    padding: 15px;
    background: lightgrey;
  }
  .header {
    grid-area: header;
  }
  .sidebar {
    grid-area: side;
  }
  .content {
    grid-area: content;
  }
`;

const categories = [
  {name: "Test"}
]
export class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      categories: [],
      selected: '',
      //array of article recommendations (id, name)
      recommendations: [{title:"First"}],
      //List of articleIds
      recommendedIds: [],
    }
  };
  //Api methods
  getAllArticles() {
    axios({
      method: 'get',
      url: "http://localhost:5000/",
    }).then(response => {
      console.log(response.data)
      this.state.articles = response.data
    })
  }

  getArticleById() {

  }




  //Lifecyle 
  componentDidMount() {
    this.getAllArticles()
  }
  
  //Selects an article
  select(e) {
    this.state.selected = e.articleId
  }



  render () {
    return (
      <StyledWrapper>
        <div class="header">
          <h1>Articles</h1>
          <p>Recommended content</p>
          <ul>
          {this.state.recommendations.map( (rec) => 
            <li>{rec.title}</li>
          )}
          </ul>
        </div>
        <div class="sidebar">
          <h2>Timeline</h2>
          <h2>Categories</h2>
          <ul>
          {this.state.categories.map( (cat) => 
            <li>{cat.name}</li>
          )}
          </ul>
        </div>
        <div class="content">
          <Outlet />
        </div>
      </StyledWrapper>
    ) 
    }
}

