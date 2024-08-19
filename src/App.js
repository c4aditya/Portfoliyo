import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { useState } from 'react';
import './App.css';

function App() {
  // in this code it work like when someone click on the click see more then work section comes 
  // step 1-for this first we make it false and it is set to the more variable that contains false 
  // step 3- I call the function that makes it true when false and false when true 
  const [more, setseemore] = useState(true);

  function hadleseemore() {
    setseemore(!more);
  }

  return (
    <div className="App">
      <div className="upper-section">
        <div className="nev-bar">
          <nav>
            <div className="logo">
              <img src="https://anuragsinghbam.netlify.app/images/name-logo-white.svg" height="80px" width="60px" alt="Logo" />
            </div>
            <div className="messanger">
              <img src="https://anuragsinghbam.netlify.app/images/telegram.svg" height="30px" width="30px" alt="Messenger" />
            </div>
          </nav>
        </div>

        <div className="main-section">
          <div className="main-text font-extrabold">
            <h1>Aditya Singh</h1>
            <h3>Interactive Front End Developer</h3>
            <button className="about-me">
              About Me  
              <img className="arrow-img" src="https://anuragsinghbam.netlify.app/images/right-arrow.svg" height="30px" alt="Arrow" />  
            </button>
          </div>
          <div className="main-image">
            <img src="https://anuragsinghbam.netlify.app/images/name-logo.svg" width="700px" alt="Main Logo" />
          </div>
          <div className="icons">
            <ul>
              <a href="https://www.linkedin.com/in/aditya-singh-7771a1265/"><i className="ic fab fa-linkedin fa-2x"></i></a>  
              <a href="https://x.com/?lang=en"><i className="ic fa-brands fa-twitter fa-2x"></i></a>
              <a href="https://www.facebook.com/"><i className="ic fa-brands fa-facebook fa-2x"></i></a>
              <a href="https://www.instagram.com/"><i className="ic fa-brands fa-instagram fa-2x"></i></a>
              <a href="https://github.com/c4aditya"><i className="ic fa-brands fa-github fa-2x"></i></a>
            </ul>
          </div>
        </div>
        <button className="more" onClick={hadleseemore}>Latest Work <i className="fa-solid fa-arrow-down"></i></button>
      </div>

      {/* This content shows when someone clicks on the see more button */}
      
      {more && (
        <div className="more-main">
          <div className="latest-work">
            <div className="content-latest-work"> 
              <img src="https://anuragsinghbam.netlify.app/images/harigurus.webp" loading="lazy" height="700px" width="500px" alt="Superflix Project" />
              <div className="content">
                <h1>Superflix, A Netflix Clone</h1>
                <p>Superflix is a clone of the Netflix user interface, built using HTML, CSS, and React.js. My main focus was to replicate the sleek UI of Netflix and deliver a seamless user experience.</p>
                <div className="tech">
                  <h1 >#HTML5</h1>
                  <h1>#CSS3</h1>
                  <h1>#TailwindCss</h1>
                  <h1>#Reactjs</h1>
                </div>
              </div>
            </div>
            <div className="cricle"></div>
            <div className='horigental-line'>
          </div>
          </div>
          
          <div className="weather-app">
            <div className="content">
              <h1>This is the weather app</h1>
              <p>Superflix is a clone of the Netflix user interface, built using HTML, CSS, and React.js. My main focus was to replicate the sleek UI of Netflix and deliver a seamless user experience.</p>
              <div className="tech">
                <h1>#HTML5</h1>
                <h1>#CSS3</h1>
                <h1>#TailwindCss</h1>
                <h1>#Reactjs</h1>
              </div>
            </div>
            <div className="image">
              <img src="https://anuragsinghbam.netlify.app/images/harigurus.webp" loading="lazy" height="700px" width="500px" alt="Weather App" />
            </div>
            <div className="cricle1"></div>
          </div>
          <div className='horigental-line2'>
          </div>

          <div className="traveal-project">
            <div className="image">
              <img src="https://anuragsinghbam.netlify.app/images/harigurus.webp" height="700px" width="500px" alt="Travel Project" />
            </div>
            <div className="content">
              <h1>This is the traveler project</h1>
              <p>This is the travelar Project where you can plan for the trip and you can book your destination for a visit</p>
              <div className="tech">
                <h1>#HTML5</h1>
                <h1>#CSS</h1>
                <h1>#Reactjs</h1>
              </div>
            </div>

          </div>
        
          <div className="cricle2">
            
          </div>
          <div className='horigental-line3'>
          </div>

          
          
          
        </div>
      )}
      <div className="vertical-line"></div>
    </div>
  );
}

export default App;
