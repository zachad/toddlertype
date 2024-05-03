import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [chars, setChars] = useState<string[]>([]);
  const handleKeypress = (e: KeyboardEvent) => {
    const char = e.key;

    switch (char) {
      // Clear the input if the user presses Enter
      case "Enter":
        setChars([]);
        break;

      // Use "Backspace" to remove the last character
      case "Backspace":
        setChars((prev) => prev.slice(0, -1));
        break;
      default:
        // ignore non-alphanumeric keys
        if (!/^[a-zA-Z0-9\s]$/.test(char)) {
          return;
        }
        setChars((prev) => [...prev, char.toUpperCase()]);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, []);

  return <div className="letters">{chars}</div>;
}

export default App;
