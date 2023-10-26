import './App.css'
import Home from './pages/Home'
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
