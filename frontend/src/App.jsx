import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Trek from "./pages/trek_details/trek"

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // loading state // it will be true when backend call will be finished

 /* useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setMessage(response.data);
        setLoading(false); // Once data is fetched, set loading to false

      })
      .catch((error) => console.error("Error fetching data:", error));
    
  }, []);*/

  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/trek_details" element={<Trek />} />
      </Routes>
    </Router>
  );
}

export default App;
