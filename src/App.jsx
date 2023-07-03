import { BrowserRouter } from 'react-router-dom';

import {
  About, Contact, Experience, Feedbacks, Hero, Education,
  Navbar, Tech, Works, StarsCanvas
} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover
          bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
       {/* <Spaceboy /> */}
       <Education />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks />*/}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
