import "./App.css";
import Blog from "./components/Blog/Blog";
import MyBlog from "./components/myBlog/MyBlog";
import AppRouter from "./components/AppRouting";
import Header from "./components/Header/Header";
import CreateBlog from "./components/CreateBlog/CreateBlog";

function App() {
  return (
    <div className="App">
       <Header/>
      <CreateBlog/>
    </div>
  );
}

export default App;
