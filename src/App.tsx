import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <div>
      <Like
        size={32}
        color="crimson"
        isLiked={isLiked}
        onClick={(newState) => {
          console.log(`Heart is now ${newState ? "liked" : "unliked"}`);
          setIsLiked(newState);
        }}
      />
      <h4>FullName: {name.firstName + " " + name.lastName}</h4>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={name.firstName}
          onChange={(event) => {
            setName({ ...name, firstName: event.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={name.lastName}
          onChange={(event) => {
            setName({ ...name, lastName: event.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default App;
