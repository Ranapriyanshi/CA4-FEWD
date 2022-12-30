import React, { useEffect, useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
// Redering everingthing through app 
function App() {
  return (
    <div>
      {/* Header */}
      <QuestionBox />
    </div>
  );
}

export default App;
