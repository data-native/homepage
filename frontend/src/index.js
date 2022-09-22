import { render } from "react-dom";
import { 
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import App from "./App";
import MainNavigation from './components/nav/mainnav.js';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
	<MainNavigation />
	<App />
  </BrowserRouter>,
  rootElement
);
