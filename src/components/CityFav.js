import React from 'react';
import '../style/cityFav.css'
import { connect } from 'react-redux';
import { loadCities, CitiesHomeRem, RemoveCities, CitiesFavAddRem } from '../actions/actionWeather';


class CityFav extends React.Component {

  onAddFav = () => {
    let data = this.props.details;
    this.props.CitiesFavAddRem(data.id);

  }

  render() {
    let data = this.props.details;
    let ingUrlBegn = 'http://openweathermap.org/img/wn/';
    let imgUrlEnd = '@2x.png';
    let stateInput = "Maharashtra";
    // eslint-disable-next-line
    let degreeSymbol = "&#8451;";

    if (data) {
      let imgurl = ingUrlBegn + data.weather[0]["icon"] + imgUrlEnd;
      return (
        <div>
          <div className="CityDetailBox">
            <h1 className="cityName">{data.name}</h1>
            <div>{stateInput}</div>
            <div>{this.props.day + ", "} {this.props.time}</div>
            <div className="weatherDesc">
              <div className="description">{data.weather[0]["description"]}</div>
              <img src={imgurl} className="icon" />
            </div>
            <h2 className="temperature">{data.main.temp} &#8451; </h2>
            <div onClick={this.onAddFav} >
              <i className={"fas fa-star"} ></i>
            </div>
          </div>
        </div>

      )
    }
    else
      return <></>
  }
}

const mapStateToProps = (state, props) => {
  //Details of the city Component is associated with
  let details = state.cities.filter((cities) => cities.id === props.id)[0]


  let d = new Date();
  let time = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return {
    cities: state.cities,
    CitiesInHomeScrnId: state.CitiesInHomeScrnId,
    details: details,
    time: time,
    day: days[d.getDay()],
    CitiesInFavScrnId: state.CitiesInFavScrnId,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    citiesInf: () => dispatch(loadCities()),
    RemoveCities: (id) => dispatch(RemoveCities(id)),
    CitiesHomeRem: (id) => dispatch(CitiesHomeRem(id)),
    CitiesFavAddRem: (id) => dispatch(CitiesFavAddRem(id)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CityFav);