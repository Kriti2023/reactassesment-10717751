import "./App.css";
import Blog from "./components/Blog/Blog";
import MyBlog from "./components/myBlog/MyBlog";
import Header from "./components/Header/Header";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import Main from "./components/Blog/Main/Main";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/Main" element={<Main />}></Route>
          <Route exact path="/Blog" element={<Blog />}></Route>
          <Route exact path="/myBlog" element={<MyBlog />}></Route>
          <Route exact path="/createBlog" element={<CreateBlog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
