// //ACTION TYPE
const SET_USERID = "SET_USERID"

// //ACTION CREATOR
export function setUserId(uid){
  const action = {type: SET_USERID, uid};
  return action
}



// //THUNK CREATOR
export function setUserIdThunk(uid){
  return (dispatch)=> {
    dispatch(setUserId(uid))
  }
}



// //REDUCER
export default function reducer(userid = '', action){
  switch(action.type){
    case SET_USERID:
      return action.uid
    default:
      return userid
  }
}