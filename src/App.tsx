import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          I Love Lakshmi
        </Alert>
      )}
      <Button
        onClick={() => {
          setShowAlert(!showAlert);
        }}
      >
        Love you
      </Button>
    </div>
  );
}

export default App;
