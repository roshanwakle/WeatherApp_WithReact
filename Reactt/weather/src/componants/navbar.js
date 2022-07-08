import { React,useState } from "react";
import axios from "axios";
import './navbar.css';

function Navbar() {
  const [location, setLocation] = useState("");
  const [flag, setFlag] = useState(false);
  const [errflag, setErrFlag] = useState(false);
  const [dataFlag, setDataFlag] = useState(false);
  const API_KEY = "74f8cf364bb8557c47cbb569d5dad64f";
  const [result, setResult] = useState({
    location: "Location",
    country: "country",
    temp: "0",
    desc: "Description",
    feel: "Feel-like",
    humidity: "0",
    speed: "0",
  });

  const onChangehandler = (event) => {
    event.preventDefault();
    console.log(">>>>>>>>>>>", event.target.value);
    setLocation(event.target.value);
    setFlag(false);
    setDataFlag(false);
    setErrFlag(false);
  };

  const onSearchhandler = () => {
    console.log(">>>>>>>>>>>>>>>> click", location);
    // let city = location
    if (location.length > 0) {
      console.log("in if cond");
      const url = `http://localhost:4000/weather?city=${location}`;
      axios
        .get(url)
        .then((response) => {
          // console.log("response", response);
          const result = response.data
          console.log("response", result);

          const obj={
            location: result.name,
            country: result.sys.country,
            temp: result.main.temp,
            desc: result.weather[0].description,
            feel: result.main.feels_like,
            humidity: result.main.humidity,
            speed: result.wind.speed,
          }
          setResult(obj);
          setDataFlag(true);
          setLocation("");
        })
        .catch((e) => {
          console.log("error", e);
          setLocation("");
          setErrFlag(true);
        });
    } else {
      console.log("please enter city");
      setFlag(true);
      setLocation("");
      setErrFlag(false);
      setDataFlag(false);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            {/* {flag ? <h6 className="text-danger ">please Enter City</h6> : <></>} */}
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Enter City"
                aria-label="Search"
                value={location}
                onChange={onChangehandler}
              />
              <button
                className="btn btn-outline-success"
                onClick={() => onSearchhandler()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="row ">
        {
          dataFlag ? <div className="data">
               <h2>Location= {result.location}</h2>
        <h2>country= {result.country}</h2>
        <h2>Temp= {result.temp} °C</h2>
        <h2>Description= {result.desc}</h2>
        <h2>Feel= {result.feel} °C</h2>
        <h2>Humidity= {result.humidity} %</h2>
        <h2>Speed= {result.speed} m/hr</h2>
          </div> :<></>
        }
      {flag ? <h6 className="text-danger error ">Please Enter City...!</h6> : <></>}
      {errflag ?  <h6 className="text-danger error ">City Not Found...!</h6> : <></>}
      </div>
    </div>
  );
}

export default Navbar;
