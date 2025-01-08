import { useSelector } from "react-redux";
import { RootState } from "./store";

import Nav from "./components/Nav/Nav";
import Pages from "./pages/Index";

function App() {
  const page = useSelector((state: RootState) => state.pages.page);

  return (
    <>
      <Nav />
      <Pages pageName={page} />
    </>
  );
}

export default App;
