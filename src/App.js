import React from 'react';
import Form from './Form';
import Axios from "axios";
import Login from './Login';


export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.getCountryData = this.getCountryData.bind(this);
    }
  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    countries: []
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const resApi = await Axios.get("https://covid19.mathdro.id/api");
    const resCountries = await Axios.get("https://covid19.mathdro.id/api/countries");
    const countries = resCountries.data.countries
    console.log('countries', resCountries.data.countries)
    this.setState({
        confirmed: resApi.data.confirmed.value,
        recovered: resApi.data.recovered.value,
        deaths: resApi.data.deaths.value,
        countries: countries,
    });
  }

async getCountryData(e) {
  if (e.target.value === "Worldwide") {
    return this.getData();
  }
  try {
   const res = await Axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
    this.setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value,
});
  }
  catch (err) {
    if (err.response.status === 404)
    this.setState({
      confirmed: "No data available",
      recovered: "No data available",
      deaths: "No data available",
  });
}
  }

renderCountryOptions() {
      return this.state.countries.map((country, i) => {
        return <option key={i}>{country.name}</option>
      });
}

  render() {
  
    return (
      
    <div className="box container">
      <h1>COVID-19 TRACKER 🧪</h1>
      
<select className="dropdown" onChange={this.getCountryData}>
  <option>Worldwide🌎</option>
  {this.renderCountryOptions()}
</select>
    <div className="flex">
      <div className="box confirmed">
        <h3>Confirmed 🤒</h3>
      <h4>{this.state.confirmed}</h4>
      </div>
      <div className="box recovered">
      <h3>Recovered 🤗</h3>
      <h4>{this.state.recovered}</h4>
      </div>
      <div className="box deaths">
      <h3>Deaths 😞</h3>
      <h4>{this.state.deaths}</h4>
      </div>
      </div>   
      <div className="box container">
      <Form 
   
      firstName="Ismel" 
      lastname="Figueroa"
      userName="ismelfigueroa"
      email="ismelfigueroa7@gamil.com"
      password="bootcamp"/>
      
      <div className="container1">
      <Login
       firstName="Ismel" 
       lastname="Figueroa"
       userName="ismelfigueroa"
       email="ismelfigueroa7@gmail.com"
       password="bootcamp"/>
       </div>
     </div>
    </div>
    );
  }
}


