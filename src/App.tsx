import { BrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import MainRoute from "./pages/Route";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <MainRoute />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
