import { useEffect, useState, createContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Instance from "./axiosConfig";
import Landing from "./pages/Landing/Landing";
import HomePage from "./pages/HomePage/HomePage";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import QuestionDetail from "./pages/QuestionDetail/QuestionDetail";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

export const AppState = createContext();

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/Ask" element={<AskQuestion />} />
          <Route path="/questions/:questionid" element={<QuestionDetail />} />
        </Route>
      </Routes>
  );
}

export default App;
