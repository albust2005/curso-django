import { Error404 } from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import { Route, Routes } from 'react-router-dom'
import Blog from "./containers/pages/Blog/Blog";
import BlogPost from "containers/pages/Blog/BlogPost";
import Blogcategory from 'containers/pages/Blog/category/BlogCategory';


function App() {
  return (
    <Provider store={store}>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}></Route>

          {/* Home Display */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/blog/post/:slug" element={<BlogPost/>}></Route>
          <Route path="/blog/categories/:category_id" element={<Blogcategory/>}></Route>
        </Routes>
    </Provider>
  );
}

export default App;
