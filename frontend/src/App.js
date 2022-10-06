import React from 'react';
import {MainNav} from './components/nav';

import {
  AdminIndex,
  AdminLanding,
  Articles,
  ArticleDetail,
  ArticleList,
  CategoryList,
  VideoList
} from './components/routes';
import {

  PublicLanding,
} from './components/routes/public/landing.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import NavList from './components/nav';

const links = [
 {to:"/",  name:"Home"},
 {to:"/articles",  name:"Articles"},
 {to:"/videos",  name:"Videos"},
 {to:"/projects",  name:"Projects"},
]


export default function App() {
  return (
    <BrowserRouter>
      <div class="header">
        <MainNav links={links}/>
      </div>      
    <div class="content">
     <Routes>
        <Route path="/" element={<PublicLanding/>}/>
        <Route path="/articles" element={<Articles/>}>
          <Route index element={<ArticleList />} />
          <Route path=":articleId" element={<ArticleDetail />}>
            <Route path="discuss" element={<ArticleList />} />
          </Route>
    </Route>
      </Routes>
    </div>
  </BrowserRouter>
)
}
