import database from './database'


//ACTION TYPE
const GET_QUESTIONS = "GET_QUESTIONS"
const CUT_FROM_QDECK = "CUT_FROM_QDECK"

//ACTION CREATORS

export function getQuestions(questions){
  const action = {type: GET_QUESTIONS, questions};
  return action
}

export function cutFromQDeck(){
  const action = {type: CUT_FROM_QDECK};
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
  

//REDUCER

export default function reducer(questionDeck = [], action){
  switch(action.type){

    case GET_QUESTIONS: 
      return action.questions;

    case CUT_FROM_QDECK:
      return questionDeck = questionDeck.slice(1);

    default:
      return questionDeck
  }
}