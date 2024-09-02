import Router from './shared/Router';
import { UserProvider } from './context/UserConext';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
export default App;
