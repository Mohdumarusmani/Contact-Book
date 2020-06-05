// Layout Types
import Layout from "layouts/Layout"

//views
import Home from 'views/Home';

import { withRouter } from "react-router-dom";

export default [
  {
    path: "(/|/index|/index.html)",
    exact: true,
    layout: Layout,
    component: withRouter(Home)
  }
];
