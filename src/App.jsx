import "./App.css";
import Button from "./components/Button.jsx"
import Alert from "./components/Alert.jsx"

const buttonBackgroundColor = ["#074EE8", "#07A4E8"];
const alertProp = [
  {
    text: "This is error alert box",
    icon: "frown",
    color: "#F9C8C8"
  },
  {
    text: "This is warning alert box",
    icon: "alertTriangle",
    color: "#F9D9C8"
  },
  {
    text: "This is info alert box",
    icon: "alertCircle",
    color: "#F9EBC8"
  },
  {
    text: "This is success alert box",
    icon: "checkCircle",
    color: "#CEF7CD"
  },
];

function App() {
  
  return (
    <div className="App">
      <div className="button-components-section">
        {//Render Button 2แบบ
        buttonBackgroundColor.map((item, index) => (
          <Button key={index} BackgroundColor={item} />
        ))
        }
      </div>
      <hr />
      <div className="alert-components-section">
        {//Render Alert 4แบบ
        alertProp.map((item, index) => (
          <Alert key={index} propsColor={item.color} propsText={item.text} propsIcon={item.icon} />
        ))
        }
      </div>
    </div>
  );
}

export default App;
