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

function filterPinned(article) {
  return article.Pinned === 1
};


export class Articles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      filtered: [],
      pinned:[],
      categories: [],
      selected: '',
      //array of article recommendations (id, name)
      recommendations: [{title:"First"}],
      //List of articleIds
      recommendedIds: [],
      filterText: "",
      handleFilter: this.handleArticleFilter,
    }
  };
  //Api methods
  getAllArticles() {
    console.log(process.env)
    //Get the articles
    axios({
      method: 'get',
     url: process.env.REACT_APP_BACKEND_URL + "/article" 
    }).then(response => {
      console.log(response.data)

      this.setState({
        articles: response.data.items,
        filtered: response.data.items,
        pinned: response.data.items.filter(filterPinned),
        categories: response.data.items.map((a) => a.Tags)
      });
    });
  }
  
  handleArticleFilter = (e) => {
      //
      if (e.target.value == "" ){
        this.setState({
          filtered: this.state.articles
        })
      } else {
        console.log(e.target.value)
        let articles_filtered = this.state.articles.filter((art) => {
          if (e.input === '') {
            return true; 
          } else {
            return art.Title.toLowerCase().includes(e.target.value)
          }
        })
        this.setState({
          filtered: articles_filtered
        })
      }
   };

  getArticleById() {

  }
  //Lifecyle 
  componentDidMount() {
    this.getAllArticles()
  }
  
  //Selects an article
  select(e) {

  }



  render () {
    return (
      <StyledWrapper>
        <div class="header">
          <h1>Articles</h1>
          <p>Recommended content</p>
          <ul>
          </ul>
        </div>
        <div class="sidebar">
          <h2>Timeline</h2>
          <h2>Categories</h2>
          <ul>
          {this.state.categories.map( (cat) => 
            <li>{cat}</li>
          )}
          </ul>
        </div>
        <div class="content">
          <Outlet context={this.state}/>
        </div>
      </StyledWrapper>
    ) 
    }
}

