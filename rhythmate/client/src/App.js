import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies] = useCookies(['AuthToken']);
  const authToken = cookies.AuthToken;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {authToken ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </>
        ) : (
          <Route path="*" element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
