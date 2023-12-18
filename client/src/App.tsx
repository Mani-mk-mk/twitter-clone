import { useState } from "react";
import Home from "./pages/Home";
// import Register from "./components/Register";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const toggleDarkMode = () => {
  //   setDarkMode((prev) => !prev);
  // };
  setDarkMode(true);

  return (
    <div data-mode={darkMode ? "dark" : ""}>
      <Home />
      {/* <Register /> */}
    </div>
  );
}

export default App;
