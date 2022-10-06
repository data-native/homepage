import React from "react";
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { 
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

import {
  PublicIndex
} from './components/routes';
import App from "./App";


const BaseLayout = styled.div`
  display: grid;
  font-family: Verdana;
  padding: 30px;
  
  h1 {
    size: 2.5rem;
  }

  h2 {
    size: 2.2rem;
    color: red;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render( <App/>);
