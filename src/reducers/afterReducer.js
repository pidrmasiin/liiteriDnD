const afterReducer = (store = false, action) => {
  if (action.type === 'AFTER') {
    return true;
  }
  return store;
};

export default afterReducer;

