import cloudyBg from './assets/partlyCloudy.jpg';
import rainyBg from './assets/rainy.jpg';
import snowBg from './assets/snowing.jpg';
import sunBg from './assets/sunny.jpg';
import stormBg from './assets/thunderstorms.jpg';
import partlyCloudyIcon from './assets/partlyCloudyIcon.png';

function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${sunBg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter city..." />
            <button>Search</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>CITY</h3>
              <img src={`url(${partlyCloudyIcon})`}  alt='partlyCloudyIcon' />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>28 °F</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
