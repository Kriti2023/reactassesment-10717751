import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header/Header";
import MyBlog from "./myBlog/MyBlog";
import Blog from "./Blog/Blog";
import CreateBlog from "./CreateBlog/CreateBlog";
 

const routes = [
  
  {
    component: MyBlog,
    
    path: "/myBlog",
    
  },
  {
    component: CreateBlog,
    
    path: "/createBlog",
    
  },
  {
    component: Blog,
    
    path: "/",
   
  },
];
const AppRouter = () => {
  return (
    <Router >
       <Header/>
      <Routes routes={routes}  />
      <Blog />
    </Router>
  );
};
export default AppRouter;
