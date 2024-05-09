
import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}

      {/* QRCodeGenerator */}
      <QRCodeGenerator/>

    </div>
  );
}

export default App;
