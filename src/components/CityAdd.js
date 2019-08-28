import React from 'react';
import '../style/cityAdd.css'
import { connect } from 'react-redux';
import { loadCities ,cityAdd,RemoveCities } from '../actions/actionWeather';

class Details extends React.Component {

  clicHadler= ()=>{
    if(this.props.CitiesInHomeScrn.length ===0){
      this.props.cityAdd("city"+this.props.index);
    }else{
      alert("Select a city first");
    }
    
  }

  render() {

    return (
      <div>
        <div className="CityAddBox">
          <div className="CityAddCircle" onClick={this.clicHadler}>
            <div className="PlusSign" >
              {this.props.contain}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
return { cities: state.cities,
         CitiesInHomeScrn: state.CitiesInHomeScrn,
         }
};

const mapDispatchToProps = (dispatch) => {
return { 
   cityAdd: (data) => dispatch(cityAdd(data)),
   RemoveCities: (id) => dispatch(RemoveCities(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);