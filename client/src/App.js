import {useState, useEffect} from 'react';
import './App.css';
import LearnMore from "./images/learn-more.svg"
import ImgLeft from "./images/img-left.svg";
import ImgRight from "./images/img-right.svg";
import Mission from "./images/mission-img.svg";
import BookOpened from "./images/book-opened.svg";
import Curve2 from "./images/curve-2.svg";
import Curve1 from "./images/curve-1.svg";
import Navbar from './Navbar';
import Microphone from './images/microphone-solid.svg';

function App() {

  
  const [talk, setTalk] = useState(false);
  return (
    
    <div>
      <div id="page" className = "animation">
    </div>

    <div className ="container home-img">

    <Navbar /> 

    <img className = "img-left" src = {ImgLeft} alt = "reading"></img>
    <img className = "img-right"  src = {ImgRight} alt = "books"></img>
    <div className = "hero-section">
      <h1>Learn Smarter, not Harder.</h1>
      <p>Notifly provides an easy, convenient text-to-speech API  and an organization system to help keep students on top of their work.</p>
    </div>  
  </div>

  <div className = "mission">
    <div className = "section mission-text">
      <h1>What is Notifly?</h1>
      <p>Notifly is a website that aims to improve the student's learning experience, whether in a traditional or virtual setting, by providing a tool for students to use.
        Instead of frantically writing down all notes in a lecture, students can focus less on "copying what is being said" and more time understanding content.
      </p>

    </div>
    <div className = "section">
      <img src= {Mission} alt = "mission"></img>
    </div>
  </div>


  <img className = "curve" src = {Curve1} alt = "curve"></img>
  <div className = "learn-more">
    <div className = "section">
      <img src = {LearnMore} alt = "learn"></img>
    </div>
    <div className = "section learn-text">
      <h1>How do we use this website?</h1>
      <p></p>
      <a href = "contact.html">Contact Us</a>
    </div>
  </div>

  <img className = "curve" src = {Curve2} alt = "curve"></img>
  <div className = "about-2">
    <h1 className = "heading">Why Notifly?</h1>
  </div>

  <div className = "card-section">
    <div className = "card">
      <img src = {BookOpened}></img>
      <p>Students must enable the microphone on this website. Then, the website will be able to record information about the lecture, producing a transcript.</p>
    </div>
    <div className = "card">
      <img src = {BookOpened}></img>
      <p>Then, students can save, edit or delete the file if they want. There will also be an option to hear siri state the information clearly.  </p>
    </div>
    <div className = "card">
      <img src = {BookOpened}></img>
      <p> They can access these materials/notes whenever they see fit- whether its late night studying, or reviewing for a nearby test.</p>
    </div>
  </div>

  <div className = "convert">
    <h1>Convert Here:</h1>
    {/* <button onClick = {isOn}><img src = {Microphone} alt = "microphone"></img>Speak Now</button> */}
    <div>
      {talk ? (<h1>Listening...</h1>) : (<h1>Not Recording</h1>)}
    </div>

  </div>


  <div className = "footer">
    <div className = "footer-inner">
      <div className = "footer-inner-text">
        <h1>Sign up to recieve updates</h1>
        <form className = "sign-up">
          <input id = "email" type = "email" placeholder = "Email"></input>
          <button type = "button" value = "Confirm">Confirm</button>
        </form>
      </div>

    <div className = "footer-section">
      <div className = "footer-section-1">
        <h1>Notifly</h1>
        <p>Make your life easier. </p>
        <p>Email us at lkasjd@gmail.com</p>
      </div>
      <div className = "footer-section-1 list-flex">
        <li><a href = "index.html">Home</a></li>
        <li><a href = "about.html">About</a></li>
        <li><a href = "FAQ.html">Files</a></li>
        <li><a href = "contact.html">Convert</a></li>
      </div>
      </div>
    </div>
    </div>
   
    </div>
  );
}

export default App;