import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Dashboard/Layout';
import Home from './Pages/Home';
import LoginLayout from './Auth/LoginLayout';
import Users from './Pages/Users/IndexUsers';
import Protected from './Auth/Protected';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginLayout />} />
        <Route path="*" element={<Navigate to="/login" />} />

        <Route
          path="/"
          element={
            <Protected>
              <Layout />
            </Protected>
          }
        >
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
