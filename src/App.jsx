import Router from './shared/Router';
import { UserProvider } from './context/UserConext';
import './App.css';
function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
export default App;
