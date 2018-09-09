import request from "./../utils/request";
export default {
  namespace: "profile",

  state: {
    annualIncome: 0,
    personalSavings: 0,
    monthlyExpense: 0,
    cpfSavings: 0,
    housingGrants: 0,
    currentAge: 0,
    selectedLocation: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    },
    *postData({payload }, { call, put }) {
      yield put({type:"save", payload:payload})
      console.log(payload)
      yield request("/api/profile", {
        method: "POST",
        body: JSON.stringify(payload)
      })
    }
  },


  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
