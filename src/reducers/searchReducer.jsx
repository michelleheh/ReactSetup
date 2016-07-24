const defaultState = {
  display: true,
  input: '',
};

const searchReducer = (state = defaultState, action) => {

  switch(action.type) {
    case 'TEST':
      console.log('fired!');
      return {
        display: action.display,
        input: action.input,
      }

    default:
      return state;
  };
};

export default searchReducer;