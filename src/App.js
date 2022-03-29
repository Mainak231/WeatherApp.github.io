import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card, InputGroup, FormControl, Button } from 'react-bootstrap'
import moment from 'moment'

function App() {

  //const API_KEY = process.env.REACT_APP_API_KEY
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Kolkata');
  const [icon,setIcon]=useState('');
  const [name,setName]=useState('Kolkata');
  const [code,setCode]=useState('IN');

  // forecast
  const[forecast_two,setForecast_two]=useState('Kolkata');
  const[Weather_two,setWeather_two]=useState('');
  const[date_two,setDate_two]=useState('');


  const[forecast_three,setForecast_three]=useState('Kolkata');
  const[Weather_three,setWeather_three]=useState('');
  const[date_three,setDate_three]=useState('');



  const[forecast_four,setForecast_four]=useState('Kolkata');
  const[Weather_four,setWeather_four]=useState('');
  const[date_four,setDate_four]=useState('');



  const[forecast_one,setForecast_one]=useState('Kolkata');
  const[Weather_one,setWeather_one]=useState('');
  const[date_one,setDate_one]=useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5fd995ed2d51032a887758429860ad77`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
      setIcon(resJson.weather[0]);
      setName(resJson.name);
      setCode(resJson.sys);
    };
    fetchApi();
  }, [search])

  useEffect(()=>{
    const fetchFor = async() =>{
      const url_For=`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=5fd995ed2d51032a887758429860ad77`
      const response_For=await fetch(url_For);
      const resJson_For=await response_For.json();
      console.log(resJson_For);
      setForecast_one(resJson_For.list[0].main);
      setWeather_one(resJson_For.list[0].weather[0]);
      setDate_one(resJson_For.list[0]);


      setForecast_two(resJson_For.list[1].main);
      setWeather_two(resJson_For.list[1].weather[0]);
      setDate_two(resJson_For.list[1]);

      setForecast_three(resJson_For.list[2].main);
      setWeather_three(resJson_For.list[2].weather[0]);
      setDate_three(resJson_For.list[2]);


      setForecast_four(resJson_For.list[3].main);
      setWeather_four(resJson_For.list[3].weather[0]);
      setDate_four(resJson_For.list[3]);
    };
    fetchFor();
  },[search])

  return (
    <Container fluid>
      <Row className='bg-dark' style={{ display: "flex", minHeight: "100vh", flexDirection: "Column" }}>
        <Col md={12} sm={12} lg={8} className="mx-auto" style={{marginTop:"4%"}}>
          <Card className="shadow px-2 " style={{ minHeight: "100%", paddingTop: "0", paddingBottom: "0" }}>
            <Row style={{ display: "flex", flexDirection: "row" }}>

              {/* form card section  */}
              <Col md={6} style={{ float: "left", paddingLeft: "0", paddingRight: "0" }}>
                <Card className="shadow shadow form-container" style={{ minHeight: "100%" }}>
                  <Card.Header>
                    <Card.Title className="float-left mt-2" style={{ fontWeight: 'bold', fontSize: "1.4rem" }}>Forecast</Card.Title>
                   {!city ?(
                     <div className="float-right mt-2">
                     <p>No city Found</p>
                   </div>
                   ):(
                    <div className="float-right mt-2">
                      <p>{search}</p>
                    </div>
                    )}
                  </Card.Header>
                  <Card.Body className=" mx-auto" style={{ marginTop: '50%' }}>
                    <Card.Text className="tagline shadow" style={{ fontWeight: 'bold', fontSize: "1.42rem" }}>
                      The Only Weather Forecast App You Need.
                    </Card.Text>
                    {/* <hr className="mx-auto" style={{ width: '50%', height: "2px" }} /> */}
                    <InputGroup className="mb-3 search-box" style={{ opacity: "80%" }}>
                      <FormControl
                        placeholder="Enter Location"
                        // aria-label="Recipient's username"
                        // aria-describedby="basic-addon2"
                        onChange={(event) => { setSearch(event.target.value) }}
                      />
                      
                    </InputGroup>
                  </Card.Body>
                </Card>
              </Col>

              {!city ? (
                <Col md={6} className="mt-3 px-4"
                  style={{
                    float: "right",
                    //  maxHeight: "5vh",
                    paddingLeft: "0",
                    paddingRight: "0",
                  }}>
                  <Header />

                  <Row>
                    <Col >
                      <h1 style={{ fontWeight: "bold" }}>Today</h1>
                      <Card className="shadow mt-3">
                        <Row style={{ display: "flex", flexDirection: "row" }}>
                          <Col md={6} style={{ float: 'left' }}>
                            <Card.Body>
                              <ul>
                                <li><h1>No Data</h1></li>
                                <br></br>
                                <li><h2>No Data</h2></li>
                                <br></br>
                                <li className="text-muted">No Data</li>
                                <li>No Data</li>
                              </ul>
                            </Card.Body>
                          </Col>
                          <Col md={6} className="bg-light" style={{ float: 'right' }}>
                            <ul className='mt-5 pt-2'>
                              <li className="text-muted">RealFeel: No Data</li>
                              <li className="text-muted mt-1">Pressure: No Data</li>
                              <li className="text-muted  mt-1">Humidity: No Data</li>
                              <li className="text-muted  mt-1">Min Temp: No Data</li>
                              <li className="text-muted  mt-1">Max Temp: No Data</li>
                            </ul>
                          </Col>
                        </Row>
                      </Card>
                      <h2 className='mt-5'>Try searching again....</h2>
                    </Col>
                  </Row>
                </Col>


              ) : (
                <Col md={6} className="mt-3 px-4"
                  style={{
                    float: "right",
                    //  maxHeight: "5vh",
                    paddingLeft: "0",
                    paddingRight: "0",
                  }}>
                  <Header />

                  <Row>
                    <Col >
                      <h1 style={{ fontWeight: "bold" }}>Today</h1>
                      <Card className="shadow mt-3">
                        <Row style={{ display: "flex", flexDirection: "row" }}>
                          <Col md={6} style={{ float: 'left' }}>
                            <Card.Body>
                              <ul>
                                <li><h1>{forecast_one.temp}°C</h1></li>
                                <br></br>
                                 <li><div style={{display:"flex"}}><h2 >{Weather_one.main}</h2><img src={`http://openweathermap.org/img/w/${Weather_one.icon}.png`}></img></div></li> 
          
                                <li className="text-muted mt-2">{Weather_one.description}</li>
                                <li>Date: {moment().format("dddd MM YYYY")}</li>
                              </ul>
                            </Card.Body>
                          </Col>
                          <Col md={6} className="bg-light" style={{ float: 'right' }}>
                            <ul className='mt-5 pt-2'>
                              <li className="text-muted">RealFeel: {city.feels_like}</li>
                              <li className="text-muted mt-1">Pressure: {city.pressure}</li>
                              <li className="text-muted  mt-1">Humidity: {city.humidity}</li>
                              <li className="text-muted  mt-1">Min Temp: {city.temp_min}</li>
                              <li className="text-muted  mt-1">Max Temp: {city.temp_max}</li>
                            </ul>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>

                  <Row className="mt-4 mb-2">
                    <Col>
                       <h2 style={{ fontWeight: "bold" }}>More on {name},{code.country}</h2> 
                      <Row>
                        <Col md={6}>
                          <Card className='bg-light'>
                            <Card.Body>
                              <ul>
                                <li><h3>{forecast_one.temp}°C</h3></li>
                                <br></br>
                                <li>{Weather_one.main}</li>
                                <li className="text-muted mt-2">{Weather_one.description}</li>
                                <li>Date: {date_one.dt_txt} </li>
                              </ul>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col md={6}>
                          <Card className='bg-light'>
                            <Card.Body>
                              <ul>
                                <li><h3>{forecast_two.temp}°C</h3></li>
                                <br></br>
                                <li>{Weather_two.main}</li>
                                <li className="text-muted mt-2">{Weather_two.description}</li>
                                <li>Date: {date_two.dt_txt} </li>
                              </ul>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col md={6}>
                          <Card className='bg-light mt-2'>
                            <Card.Body>
                              <ul>
                                <li><h3>{forecast_three.temp}°C</h3></li>
                                <br></br>
                                <li>{Weather_three.main}</li>
                                <li className="text-muted mt-2">{Weather_three.description}</li>
                                <li>Date: {date_three.dt_txt} </li>
                              </ul>
                            </Card.Body>
                          </Card>
                        </Col>


                        <Col md={6} >
                          <Card className='bg-light mt-2'>
                            <Card.Body>
                              <ul>
                                <li><h3>{forecast_four.temp}°C</h3></li>
                                <br></br>
                                <li>{Weather_four.main}</li>
                                <li className="text-muted mt-2">{Weather_four.description}</li>
                                <li>Date: {date_four.dt_txt} </li>
                              </ul>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                </Col >




              )}

            </Row>



          </Card>
        </Col>
      </Row>
    </Container>

  );
}

export default App;





