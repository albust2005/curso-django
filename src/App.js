import { Error404 } from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}></Route>

          {/* Home Display */}
          <Route path="/" element={<Home/>}></Route>
        </Routes>
    </Provider>
  );
}

export default App;
