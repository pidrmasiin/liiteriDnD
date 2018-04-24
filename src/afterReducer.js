const afterReducer = (store = false, action) => {
    if (action.type==='AFTER') {
        store = true
      return store
    }
    return store
  }
  
  export default afterReducer