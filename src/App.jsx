import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Content from "./layout/Content/Content";
import Test from "./pages/Tests";
import MainContext from "./Context";

function App() {

  return (
    <MainContext>
      <Routes>
        <Route path="*" element={<Test />} />
      </Routes>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </MainContext>
  )
}

export default App
