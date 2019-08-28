import React from 'react';
import CityAdd from '../components/CityAdd'
import CitySelect from '../components/CitySelect'
import CityDetails from '../components/CityDetails'
import { connect } from 'react-redux';
import { loadCities, RemoveCities } from '../actions/actionWeather';
import '../style/home.css'

class HomeScreen extends React.Component {

  render() {
    if (true)
      return (
        <div>
          <div className="homeScreen">
            

            {(this.props.CitiesInHomeScrnId || []).map((data, index) =>
              <CityDetails
                id={data} index={index} />
            )
            }

            {(this.props.CitiesInHomeScrn || []).map((data, index) =>
              <CitySelect
                contain={data} index={index} />
            )
            }
            
            <div>
              <CityAdd contain={'+'} />
            </div>
            

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
    CitiesInHomeScrn: state.CitiesInHomeScrn,
    CitiesInHomeScrnId: state.CitiesInHomeScrnId
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    citiesInf: () => dispatch(loadCities()),
    RemoveCities: (id) => dispatch(RemoveCities(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
