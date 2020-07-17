import React from "react";
import Axios from "axios";
import "./App.css";
import DisplayWeather from "./component/DisplayWeather.js";
import Navbar from "./navbar/Navbar";

class App extends React.Component {
  // State
  state = {
    coords: {
      latitude: 45,
      longitude: 60,
    },
    data: {},
    inputData: "",
  };

  componentDidMount() {
    // Get Device Location

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        this.setState({ coords: newCoords });

        // API CALL
        Axios.get(
          `http://api.weatherstack.com/current?access_key=14e0ad077fd1dea3ad9ab4b1d8854270&query=
        ${this.state.coords.latitude},${this.state.coords.longitude}`
        ).then((res) => {
          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons,
          };

          this.setState({ data: weatherData });
        });
      });
    } else {
      console.log("Not Supported");
    }
  }

  change = (value) => {
    this.setState({ inputData: value });
  };

  changeWeather = (event) => {
    event.preventDefault();

    //API CALL
    Axios.get(
      `http://api.weatherstack.com/current?access_key=14e0ad077fd1dea3ad9ab4b1d8854270&query=${this.state.inputData}`
    ).then((res) => {
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons,
      };

      this.setState({ data: weatherData });
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar changeWeather={this.changeWeather} changeRegion={this.change} />
        <div className="container">
          <DisplayWeather weatherData={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
