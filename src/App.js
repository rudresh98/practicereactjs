import "./App.css";
import ATest from "./components/ATest";
import BTest from "./components/BTest";
import CTest from "./components/CTest";
function App() {
  const data = "isha";
  const age = 10;
  return (
    <>
      <ATest name={data} age={age} />
      {/* <BTest /> */}
      {/* <CTest name={data} age={age} /> */}
    </>
  );
}

export default App;
