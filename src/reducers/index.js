let defaultState={
    CitiesInDropdown:  [],
    CitiesInHomeScrn:  [],
    CitiesInHomeScrnId:  [],
    CitiesInFavScrnId:  [],
    cities:[]

}

const mainReducer=(state=defaultState, action)=>{
    switch (action.type){
    case 'CITYDROPDOWNLIST' :
        return{
            ...state,
            cities : action.cities
        }
    case 'CITYDROPDOWNLISTREMOVE' :
        return{
            ...state,
            cities : action.data
        }
    case 'ADDCITYHOME':
        return{
            ...state,
            CitiesInHomeScrn: [action.data]
        }

    case 'ADDCITYHOMEID':
        return{
            ...state,
            CitiesInHomeScrnId: [ ...state.CitiesInHomeScrnId, action.data ]
        }

    case 'REMCITYHOMEID':
        let newState = state.CitiesInHomeScrnId.filter(val => val !== action.data );
        return{
            ...state,
            CitiesInHomeScrnId: newState
        } 

    case 'ADDREMCITYFAVID':
        if(state.CitiesInFavScrnId.filter((data)=> data === action.data).length <= 0){
            return{
                ...state,
                CitiesInFavScrnId:  [ action.data, ...state.CitiesInFavScrnId]
            }
        }else{
            let newState =state.CitiesInFavScrnId.filter((val)=> val !== action.data);
            return{
                ...state,
                CitiesInFavScrnId: newState
            }
        }
        
    case 'REMOVECITYHOME':
        return{
            ...state,
            CitiesInHomeScrn: state.data
        }

    case 'REMOVESELECTCITY':
        return{
            ...state,
            CitiesInHomeScrn : [
                
              ]
        }
    default:
        return{
            ...state
        }
    }
}

export default mainReducer;
