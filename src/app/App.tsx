import Router from './Router';
import ThemeProviders from './ThemeProviders';
import '../styles/App.css';

function App() {
  return (
    <ThemeProviders>
      <Router />
    </ThemeProviders>
  );
}

export default App;