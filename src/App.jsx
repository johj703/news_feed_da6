import Router from './shared/Router';
import { UserProvider } from './context/UserConext';
import './App.css';
import { SearchProvider } from './context/SearchContext';
function App() {
  return (
    <UserProvider>
      <SearchProvider>
        <Router />
      </SearchProvider>
    </UserProvider>
  );
}
export default App;
