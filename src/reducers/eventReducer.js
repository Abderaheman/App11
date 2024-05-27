const initialState = {
    events: [],
    loading: false,
    error: null,
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EVENTS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_EVENTS_SUCCESS':
        return {
          ...state,
          loading: false,
          events: action.payload,
        };
      case 'FETCH_EVENTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default eventReducer;
  