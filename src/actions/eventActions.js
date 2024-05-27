import axios from 'axios';

export const fetchEvents = () => async dispatch => {
  dispatch({ type: 'FETCH_EVENTS_REQUEST' });
  try {
    const response = await axios.get('/api/events');
    dispatch({ type: 'FETCH_EVENTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_EVENTS_FAILURE', payload: error.message });
  }
};
