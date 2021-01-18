import React, { useState, useEffect } from "react";
import axios from "axios"
//import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});

  const onClick = () => {
    setUsername("https://api.github.com/users/" + value);
  };

  useEffect(() => {
    githubApi();
  }, [username]);

  const githubApi = async () => {
    const resp = await axios.get(username);
    setData(resp.data)
  };

  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={onClick}>search</button>
      <div className="user-container">
        <h5>Full Name: {data.name}</h5>
        <h5>Number of Followers: {data.followers}</h5>
        <h5>Link to the data about followers: {data.followers_url}</h5>
      </div>
    </div>
  );
}

// function A (props) {
//   return (
//     <div>im A{props.children}</div>
//   )
// }

// function B () {
//   return (
//     <div>im B</div>
//   )
// }

// export default function App() {
//   return (
//   <A>
//     <B/> // children
//   </A>
//   )
// }

// im A im B