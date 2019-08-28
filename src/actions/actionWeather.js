import axios from 'axios';

export function loadCities(){
    return(dispatch)=>{
        let api ="https://api.openweathermap.org/data/2.5/box/city?bbox=77.797851,20.076570,80.083008,21.493964,10"
        let apikey="&appid=a0f7ba0ee76b6a386368ff52d822812d";

        return axios.get(api+apikey)
        .then((response)=>{  dispatch(fetchApi(response.data.list))
    })
  }
}
export function citySelRem(){
    return{
        type: "REMOVESELECTCITY",
        index: 0
    }
}

export function CitiesHomeRem(id){
    
    return{
        type: "REMCITYHOMEID",
        data: id
    }
}

export function CitiesHomeAdd(id){
    
    return{
        type: "ADDCITYHOMEID",
        data: id
    }
}
export function cityAdd(data){
    return{
        type: "ADDCITYHOME",
        data :data
    }
}
export function RemoveCities(data){
    
    return{
        type: "CITYDROPDOWNLISTREMOVE",
        data: data
    }
}
export function CitiesFavAddRem(id){
    
    return{
        type: "ADDREMCITYFAVID",
        data: id
    }
}

export function fetchApi(cities){
    return{
        type: "CITYDROPDOWNLIST",
        cities: cities 
    }
}