import database from './database'


//ACTION TYPE
const GET_QUESTIONS = "GET_QUESTIONS"


//ACTION CREATORS

export function getQuestions(questions){
  const action = {type: GET_QUESTIONS, questions};
  return action
}



//THUNK CREATOR

export function fetchQuestionsThunk(){
  return (dispatch) => {
    return database.ref('/QuestionSet').once('value')
      .then(snapshot => snapshot.val())
      .then(questionDeck => {
        const action = getQuestions(questionDeck);
        dispatch(action)
      })
      .catch((error)=> console.log(error))
  }
}
  

//   return dispatch => {

//     database.ref().once('value')
//     .then(snapshot=>{
//       console.log("snapshot.val", snapshot.val())
//       snapshot.val()
//     })
//     .then(questionDeck => {
//       console.log(questionDeck)
//       const action = getQuestions(questionDeck);
//       dispatch(action)
//     })
//   }
// }

//REDUCER

export default function reducer(questionDeck = [], action){
  switch(action.type){

    case GET_QUESTIONS: 
      return action.questions;

    default:
      return questionDeck
  }
}