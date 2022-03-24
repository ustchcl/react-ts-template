import auth from 'reducers/auth';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const reducer = (history: any) => combineReducers({
  auth,
  router: connectRouter(history)
});

export default reducer