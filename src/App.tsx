import { useSelector } from "react-redux";
import { RootState } from "./store";

import Pages from "./pages/Index";
import Layout from "./components/Layout/Layout";

function App() {
  const page = useSelector((state: RootState) => state.pages.page);

  return (
    <>
      <Layout>
        <Pages pageName={page} />
      </Layout>
    </>
  );
}

export default App;
