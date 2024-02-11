import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Content from "./layout/Content/Content";
import Test from "./pages/Tests";

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<Test />} />
      </Routes>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
