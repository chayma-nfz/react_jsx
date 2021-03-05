import React from "react";
import './App.css';
import image from './images/image1.jpg';
import image1 from './images/myvideo.mp4';
import './Style.css';


function App() {
  return (
    <div className="App">
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }} >

        <h1 className="title-red" >Nefzi Chayma</h1>

        <br />

        <img src={image} alt=""  style={{width :250 ,height:150}}/>
        < br />
        <br />
        <img src="/image/im.jpg" alt="" />
        <br />

        <video style={{ width: 320, height: 240 }}  src={image1} type="video/mp4"   controls />
        
      



      </div>
    </div>
  );

}

export default App;
