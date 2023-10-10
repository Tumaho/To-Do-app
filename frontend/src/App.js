import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <>
              <ProtectedRoute>
                <Dashboard />{" "}
              </ProtectedRoute>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
