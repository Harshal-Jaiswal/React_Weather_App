import React from 'react';
import CityFav from '../components/CityFav'
import { connect } from 'react-redux';
import { loadCities,  RemoveCities } from '../actions/actionWeather';
import '../style/home.css'

class FavouriteScreen extends React.Component {

  componentDidMount() {
    this.props.citiesInf();
  }

  render() {
    if (true)
      return (
        <div>
          
          <div className="homeScreen">

            {(this.props.CitiesInFavScrnId || []).map((data, index) =>
              <CityFav
                id={data} index={index} />
            )}

          </div>
        </div>
      )
    else
      return <></>
  }

}


const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    CitiesInFavScrnId : state.CitiesInFavScrnId,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    citiesInf: () => dispatch(loadCities()),
    RemoveCities: (id) => dispatch(RemoveCities(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteScreen);
