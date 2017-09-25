//ACTION TYPE
const SEND_LOCATION = "SEND_LOCATION"

//ACTION CREATOR
export function sendLocation(location){
  const action = {type: SEND_LOCATION, location}
  console.log("ACTION.LOCATION", action.location)
  return action
}
//THUNK CREATOR
export function sendLocationThunk(location){
  return (dispatch) => {
    dispatch(sendLocation(location))
  }
}

//REDUCER


export default function reducer(location = {}, action){
  switch(action.type){
    case SEND_LOCATION:
      return action.location
    default:
      return location
  }
}