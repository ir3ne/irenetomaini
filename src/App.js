import React from 'react';
import scss from './scss.svg';
import './App.scss';



function App() {
  if (navigator.onLine)
  return (
    <div className="App">
      <div className="Title">Irene Tomaini</div>
        <div className="Content">
        <div className="Text">
        Irene Tomaini is a Front-end developer specializing in UI, CSS, accessibility.
        <br />
        Scss enthusiast <img src={scss} alt="scss rocks" width="38" height="38" />.
        <br />
        She works remotely from Italy.
        </div>
        <div className="Contacts">
          <div className="Contacts-link">
          <a href="https://www.linkedin.com/in/irenetomaini/">
          <svg width="16" height="16" viewBox="0 0 512 512" >
            <path d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
            C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
            M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
            c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
            s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/>
          </svg>
            <small><b>/irenetomaini</b></small>
          </a>
          </div>
          <div className="Contacts-link">
          <a href="https://github.com/ir3ne">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-label="github"><path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"></path></svg>
            <small><b>/ir3ne</b></small>
            </a>
          </div>
          <div className="Contacts-link">
          <a href="https://twitter.com/irenetomaini1">
          <svg width="14" height="14" viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
  <path d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"/>
</svg>
            <small><b>/irenetomaini1</b></small>
            </a>
          </div>
        </div>
      </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
  else 
  return (
    <div>ciao</div>
  );
}

export default App;
