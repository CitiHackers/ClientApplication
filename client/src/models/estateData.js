
export default {

    namespace: 'estateData',
  
    state: {
      estateList:[],//list of estates pulled from server
      selectedEstates:[],//estates selected by user for comparison
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      addEstate(state,{payload:estate}){
        return {...state, ...state.selectedEstates.push(estate.item)}
      },
      removeEstate(state,{payload:estate}){
        const index = state.selectedEstates.indexOf(estate)
        return {...state, ...state.selectedEstates.splice(index, 1)}
      },
      clearList(state){
        return{...state, estateList:[]}
      },
      clearSelection(state){
        return{...state, selectedEstates:[]}
      }
    },
  
  };
  