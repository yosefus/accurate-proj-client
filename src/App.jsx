import { Route, Routes } from "react-router-dom";
import Test from "./pages/Tests";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<>home</>} />
        <Route path="*" element={<Test/>} />
      </Routes>
    </>
  )
}

export default App
