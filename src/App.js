import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg';
import style from './style.css';


function App() {
  return (
    <div className="App">
      <div style= {{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className='titleRed'>Your name here </h1>
        <img src= {imageInSrc} alt="imageInSrc"/>
        <br/>
        <img src="/imageInPublic.jpg" alt="imageInPublic"/>
      </div>
      <div>
        <video width="320" height="240" controls>

         <source src="/reactVideo.mp4" type="video/mp4"/>

        </video>
      </div>
    </div>
  );
}

export default App;
