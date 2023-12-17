import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div data-mode={darkMode ? "dark" : ""}>
      <Sidebar />
    </div>
  );
}

export default App;
