import React from 'react';
import '../style/cityDetail.css'
import { connect } from 'react-redux';
import { loadCities, CitiesHomeRem,  CitiesFavAddRem } from '../actions/actionWeather';



class CityDetails extends React.Component {


  componentDidMount() {
    this.props.citiesInf();
  }


  onClose = () => {
    let data = this.props.details;
    this.props.CitiesHomeRem(data.id);
    this.onRemFav();
  }

  onRemFav = () => {
    let data = this.props.details;
    if(this.props.CitiesInFavScrnId.filter(val =>val === data.id).length >0){
      this.props.CitiesFavAddRem(data.id);
    }
    
  }

  onAddFav = () => {
    let data = this.props.details;
    this.props.CitiesFavAddRem(data.id);
  }


  render() {
    let data = this.props.details;
    let ingUrlBegn = 'http://openweathermap.org/img/wn/';
    let imgUrlEnd = '@2x.png';
    let stateInput ="Maharashtra";
    // eslint-disable-next-line
    let degreeSymbol = "&#8451;";

    if (data) {
      let imgurl = ingUrlBegn + data.weather[0]["icon"] + imgUrlEnd;
      return (
        <div>
          <div className="CityDetailBox">
            <div className="CityDetailBoxClose" onClick={this.onClose}>X</div>
            <h1 className="cityName">{data.name}</h1>
            <div>{stateInput}</div>
            <div>{this.props.day+", "} {this.props.time}</div>
            <div className="weatherDesc">
              <div className="description">{data.weather[0]["description"]}</div>
              {/* // eslint-disable-next-line */}
              <img src={imgurl} className="icon" />
            </div>
            <h2 className="temperature">{data.main.temp} &#8451; </h2>
            <div onClick={this.onAddFav} >
              <i className={this.props.favStarType + " fa-star"} ></i>
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

  let favStarType = 'far';
  let isComponentInFav = !state.CitiesInFavScrnId.filter((data) => data === props.id).length <= 0;

  if (isComponentInFav) {
    favStarType = 'fas'
  }



  
  let d = new Date();
  let time =("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return {
    cities: state.cities,
    CitiesInHomeScrnId: state.CitiesInHomeScrnId,
    details: details,
    time:time,
    day:days[d.getDay()],
    favStarType: favStarType,
    CitiesInFavScrnId: state.CitiesInFavScrnId,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    citiesInf: () => dispatch(loadCities()),
    CitiesHomeRem: (id) => dispatch(CitiesHomeRem(id)),
    CitiesFavAddRem: (id) => dispatch(CitiesFavAddRem(id)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CityDetails);