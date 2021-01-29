//import {Fragment} from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Components/Header';
import { Nav } from './Components/Nav';
import { Projects } from './Components/Projects';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <>
      <GlobalStyles />
      <>
        <Nav />
        <Header />
        <Projects />
        <About />
        <Contact />
      </>
    </>
  );
}

export default App;
