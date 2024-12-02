import "./App.css";
import Button from "./components/Button.jsx"


function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */
        <Button BackgroundColor="#074EE8" />
        }
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */
        <Button BackgroundColor="#07A4E8" />
        }
      </div>
    </div>
  );
}

export default App;
