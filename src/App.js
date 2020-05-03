import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';


const particlesOptions ={
  
    particles: {
      number: {
        value :100,
        density: {
          enable:true,
          value_area:300
        }
      }
      
      }
    }
  

class App extends Component {
  render() {
  return (
    <div className="App">
       <Particles className='particles'
              params={particlesOptions}
              
            />
      <Navigation />
      <Logo />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
  }
}

export default App;
