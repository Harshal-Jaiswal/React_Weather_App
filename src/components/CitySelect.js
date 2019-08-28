import React from 'react';
import '../style/citySelect.css'
import { connect } from 'react-redux';
import { loadCities, citySelRem, CitiesHomeAdd, RemoveCities } from '../actions/actionWeather';
import Select from 'react-select';

class CitySelect extends React.Component {
  constructor() {
    super();
    this.state = {
      cityid: 0
    }
  }

  componentDidMount() {
    this.props.citiesInf();

     }

  onClose = () => {
    let id = this.state.cityid;
    this.props.citySelRem(this.props.index);
  }

  onSubmit = () => {
    let id = this.state.cityid;
    if(id === 0){
      alert('No City Selected!');
    }
    else{
      this.props.citySelRem(this.props.index);
      this.props.CitiesHomeAdd(id);
    }
    
  }

  render() {
    var options = this.props.options;
    return (
      <div>

        <div className="CitySelectBox">
          <div className="CitySelectBoxClose" onClick={this.onClose}>X</div>
          <Select className="CitySelectNav"  options={options} 
                  defaultValue={{ label: "Select City", value: 0 }}
                  onChange={(e) => {this.setState({ cityid: e.value });} } />
          <input type="button" className="CityAddBtn" value="Add" onClick={this.onSubmit} />
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  let options = [];

  let opt = state.cities;
  if (state.cities !== []) {
    if (state.CitiesInHomeScrnId !== []) {
      opt = state.cities.filter((city) => state.CitiesInHomeScrnId.indexOf(city.id) < 0)
    }
    opt.map((data) =>
      options.push({ "label": data.name, value: data.id })
    )
  }

  return {
    cities: state.cities,
    options: options,
    CitiesInHomeScrnId: state.CitiesInHomeScrnId,

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    citySelRem: () => dispatch(citySelRem()),
    citiesInf: (index) => dispatch(loadCities(index)),
    CitiesHomeAdd: (id) => dispatch(CitiesHomeAdd(id)),
    RemoveCities: (id) => dispatch(RemoveCities(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CitySelect);