import './App.css';import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NotificationProvider } from './context';
import { AppRouter } from './Router';
function App() {
  const [theme, setTheme] = useState("dark");
  let themeOp=localStorage.getItem("theme") === null ? "dark":localStorage.getItem("theme");
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </NotificationProvider>
  );
}
export default App