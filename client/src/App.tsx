import { useState } from "react";
import Register from "./components/Register";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div data-mode={darkMode ? "dark" : ""}>
      <Register />
    </div>
  );
}

export default App;
