
import './App.css';
import ChangeTheme from './component/ChangeTheme';
import { ThemeContextProvider } from './context/ThemeContexts';

function App() {
  return (

    <ThemeContextProvider>

     <ChangeTheme/>


    </ThemeContextProvider>
  
  );
}

export default App;
