import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatPage from './routes/chat/pages/chat-page';
import LoginPage from './routes/login/pages/login-page';
import MainPage from './routes/main/pages/main-page';
import SajuPage from './routes/saju/pages/saju-page';
import { Header } from './components/header';
import SetProfilePage from './routes/set-profile/pages/set-profile-page';
import Auth from './routes/login/pages/auth';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route
                path="/saju"
                element={<PrivateRoute origin={<SajuPage />} />}
              />
              <Route path="/set-profile" element={<SetProfilePage />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

function PrivateRoute({ origin, profilePath = '/set-profile', ...rest }) {
  const nickname = useSelector((state) => state.user.nickname);
  const isLogin = useSelector((state) => state.user.isLogin);
  if (!isLogin) {
    return <Navigate to="/login" />;
  } else {
    if (nickname === null) {
      return <Navigate to={profilePath} />;
    }
  }
  return origin;
}
