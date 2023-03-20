import "./App.css";
import Blog from "./components/Blog/Blog";
import MyBlog from "./components/myBlog/MyBlog";
import Header from "./components/Header/Header";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import Main from "./components/Blog/Main/Main";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./components/store";
function App() {
  return (
    <div className="App">
      <Router>
        <Provider  store={store}>
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/Blog" element={<Blog />}></Route>
          <Route exact path="/myBlog" element={<MyBlog />}></Route>
          <Route exact path="/createBlog" element={<CreateBlog />}></Route>
        </Routes>
        </Provider>
      </Router>
    </div>
  );
}
export default App;
