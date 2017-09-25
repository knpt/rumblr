//ACTION TYPE
const CONCAT_SCORE = "CONCAT_SCORE"


//ACTION CREATORS
export function concatScore(letter){
  const action = {type: CONCAT_SCORE, letter};
  return action 
}

//THUNK CREATORS


//REDUCER

export default function reducer(score = [], action){
  switch(action.type){
    case CONCAT_SCORE:
      return [...score, action.letter];
    default: 
      return score 
  }
}